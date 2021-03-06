import _filter from './internal/_filter';
import curry from './curry';

function difference(toRemove, subject) {
  if (!toRemove) {
    return subject;
  }
  return _filter(value => !toRemove.contains(value), subject);
}

/**
 * Take the difference between one iterable and another iterable.
 * Only the elements present in just subject will remain.
 *
 * @example
 * const removeOne = difference(Set.of(1));
 *
 * removeOne(Set.of(1, 2, 3)) // returns Set { 2, 3 }
 *
 * @param  {Iterable} toRemove
 * @param  {Iterable} subject
 * @return {Iterable}
 */
export default curry(difference);
