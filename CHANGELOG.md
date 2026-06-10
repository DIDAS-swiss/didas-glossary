# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]

### Security

- Forced `axios` transitive dependency to `^1.17.0` via npm `overrides` to remediate
  CVE-2026-44495 (prototype pollution in config merge, high severity). The vulnerable
  version 0.21.2 was pulled in by `spec-up-t` and could enable credential theft and
  response hijacking.
