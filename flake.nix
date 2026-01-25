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

          installPhase = ''
            mkdir $out;
            cp -r dist/ $out/;
            cp -r node_modules/ $out/;
          '';
        };
      }
    );
}
