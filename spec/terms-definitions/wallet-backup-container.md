[[def: wallet backup container, Wallet Backup Container, wbak]]

~ The encrypted file format in which a [[ref: wallet]] exports credentials so they can be transferred to another wallet, as profiled by [Swiss Profile Portability](https://swiyu-admin-ch.github.io/specifications/swiss-profile-portability/) (version 1.0, draft).

~ swiyu context (Swiss Profile Portability 1.0): `container_encryption.json` **MUST** be used and contained in the backup file; wbak files in plain JSON **MUST NOT** be used and have to be encoded as JWE, which wallets **MUST** support with `alg` `dir` and `enc` `A256GCM`. In the metadata file, the `profile_version` parameter (`swiss-profile-portability:1.0.0`) is **REQUIRED**. For batch-issued credentials with a hardware key [[ref: holder binding]], the `credentials` array **SHOULD** contain only a single credential. A credential is treated as refreshable when it has an `authentications` entry in the container and the issuer metadata parameter `credential_refresh_disabled` is absent or false.

~ Does not imply: the container is a transfer format. Whether a transferred credential can be presented from the receiving wallet is not established by the container itself.

~ Relation to ToIP: no equivalent term.

~ Language equivalents:

~ [DE] **Wallet Backup Container** (der englische Begriff wird verwendet)

~ [FR] **Wallet Backup Container** (terme anglais en usage)

~ [IT] **Wallet Backup Container** (termine inglese in uso)
