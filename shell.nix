{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  packages = with pkgs; [
    nodejs
    yarn
    deno
    go
    jdk11
    python311
  ];
}
