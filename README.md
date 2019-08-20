# Quora feed parser
Package that parse your first article from feed at quora.com

# Install
```sh
npm i quora-feed-parser
```

## Usage

```ts
import QFP from 'quora-feed-parser';

(async () => {
    const resultOfQFP = await QFP('yiknubelmu@desoz.com', '123test');
    // resultOfQFP => ['Title of your first articale from feed', 'Content the most popular answer'];
})()
```
