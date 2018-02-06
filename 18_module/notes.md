# Sets and WeakSets

## Sets
* Unique array (add the same item once)
* Different from array; can't acces items and not index based.
* List of items you can add, remove from and loop.
* If you want to delete something, you don't have to acces it by using array.
* I's an iterator so you can call .next on it.
* Keys and values are mapped to the same thing.
* You can pass an existing array into a new set.

## Understanding sets with Brunch
* If you call next it will remove itself from the iterator

## Weaksets
* Like a set; but there are limitiations (benefits)
* Weakset can only contain an object. (not strings numbe)
* You can not loop over it; there is no iterator
* No .clear method; weaksets clean themselves up (carbage collection)
* Reference to something doesn't exist; garbage collected. Automatically taken out.
* Memory leak; reference something that still is in memory