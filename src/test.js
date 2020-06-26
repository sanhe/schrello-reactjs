import {OrderedMap} from 'immutable';

var map = new OrderedMap();
map = map.set('m', 5); //{m : 5}
map = map.set('a', 1); //{m : 5, a : 1}
map = map.set('p', 8); //{m : 5, a : 1, p : 8}
for(var elem of map) {
    console.log(elem);
}