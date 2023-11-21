{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  packages = with pkgs; [
    nodejs
    yarn
    deno
    jdk11
    python311
  ];
}
