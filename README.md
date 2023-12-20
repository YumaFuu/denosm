# sm-deno

🦖 Fuzzy Finder for [ AWS SSM Parameter Store ](https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-parameter-store.html)

## Usage

```bash
$ sm # fuzzy find
$ sm list
$ sm get -n "/path/to/ssm"
$ sm list -p your-aws-profile # You can set AWS_PROFILE
```

## Install
```bash
$ deno install -n sm -A
```


## Requirements

- [Deno](https://deno.com)
- [aws-cli](https://aws.amazon.com/cli/)