#!/bin/sh

set -e;
set -x;

nix build;
rm -rf /var/www/colmmurphyxyz/*;
cp -r result/* /var/www/colmmurphyxyz;

