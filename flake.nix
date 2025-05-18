{
  description = "A web development project using Astro, React, and TypeScript";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs {
          inherit system;
        };

        nodejs = pkgs.nodejs_20;

      in {
        devShells.default = pkgs.mkShell {
          buildInputs = [
            nodejs
            pkgs.nodePackages.npm
          ];

          shellHook = ''
            echo "🚀 Web Dev Shell with Astro + React + TypeScript"

            # Optional: install dependencies if node_modules doesn't exist
            if [ ! -d node_modules ]; then
              echo "📦 Installing npm dependencies..."
              npm install
            fi
          '';
        };
      }
    );
}
