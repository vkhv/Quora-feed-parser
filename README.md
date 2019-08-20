# Quora feed parser   [![Build Status](https://travis-ci.com/vkhv/Quora-feed-parser.svg?branch=master)](https://travis-ci.com/vkhv/Quora-feed-parser)
Package that parse your first article from feed at [quora.com](https://www.quora.com).

# Install
```sh
npm i quora-feed-parser
```

## Usage example

```ts
import QFP from 'quora-feed-parser';

(async () => {
    const resultOfQFP = await QFP('yiknubelmu@desoz.com', '123test');
    // Example of the response:
    console.log(resultOfQFP);
    [ 'Is the sentence "клуква в квадрате" some Russian proverb? If so, what does it mean?',
      '> Is the sentence "клуква в квадрате" some Russian proverb? If so, what does it mean?It means “cranberry squared’ (клюква в квадрате).It is not a proverb, but does require explanation.“cranberry”(клюква) refers to idiotic, stereotypical portrayal of russian culture, usually by foreign writers, movies, and so on.Balalaikas, bears, vodka, ushanka, ak-47, matryoshkas - those are “klyukva” (cranberry)^^^ “klyukva”(cranberry)Entire Red Alert series are klyukva (although fun one), other “klyukva” examples include Freedom Fighters, Call of Duty, and so on.There’s a good article - in russian - about it here:КлюкваWritten with great deal of cynicism.“squared”, however, means…. it is much much powerful/stronger than usual, although with ironic overtones (kinda hard for me to translate). клюква в квадрате would mean that there’s much klyukva than usual and the speaker slightly mocks it.The use of klyukva originated from somewhere around 19th century, when somebody wrote something about “sitting under shade of branching cranberry (tree)” (под сенью развесистой клюквы) .Except… cranberry is a small plant that grows 2..3 centimeters tall.So you can’t rest under its shade unless you’re an ant. And speaking about enjoying shade of branching cranberry (trees) demonstrates profound unfamiliarity with it.And that’s how the expression was supposedly born.4.6k views · View Upvoters · View Sharers' ]
})()


```
