{
  description = "AstroJS static site";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-24.05";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs =
    {
      self,
      nixpkgs,
      flake-utils,
    }:
    flake-utils.lib.eachDefaultSystem (
      system:
      let
        pkgs = import nixpkgs { inherit system; };
        nodejs = pkgs.nodejs_20;
      in
      {
        devShells.default = pkgs.mkShell {
          name = "astro-dev-shell";

          buildInputs = [
            nodejs
            pkgs.git
            pkgs.nodePackages.npm
          ];

          shellHook = ''
            echo "activated";
          '';
        };

        packages.default = pkgs.buildNpmPackage {
          name = "colmmurphy-xyz-frontend";

          buildInputs = [
            nodejs
            pkgs.nodePackages.npm
          ];

          src = self;

          npmDeps = pkgs.importNpmLock {
            npmRoot = ./.;
          };

          npmConfigHook = pkgs.importNpmLock.npmConfigHook;

          # NB: when deploying, remember to copy $out/dist/client to /var/www or similar, if necessary
          installPhase = ''
            mkdir -p $out
            cp -r dist node_modules $out/
            
            mkdir -p $out/bin
            cat > $out/bin/colmmurphy-xyz-frontend <<EOF
            #!${pkgs.bash}/bin/bash
            exec ${nodejs}/bin/node $out/dist/server/entry.mjs
            EOF
            chmod +x $out/bin/colmmurphy-xyz-frontend
          '';
        };
      }
    );
}
