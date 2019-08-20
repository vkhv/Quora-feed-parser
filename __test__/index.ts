import QFP from '../index';
import {equal} from 'assert';

(async () => {
    const resultOfQFP = await QFP('yiknubelmu@desoz.com', '123test');
    equal(resultOfQFP.length, 2, 'Tuple with result shold contain title and content of your first feed.');
})()