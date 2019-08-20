# Quora feed parser
Package that pase your first feed article at quora.com


## Usage

```ts
import QFP from 'quora-feed-parser';

(async () => {
    const resultOfQFP = await QFP('yiknubelmu@desoz.com', '123test');
    // resultOfQFP => ['Title of your first articale from feed', 'Content the most popular answer']; ]
})()
```
