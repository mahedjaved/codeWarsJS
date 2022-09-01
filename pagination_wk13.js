//  which is a utility class helpful for querying paging information related to an array.

// For this exercise you will be strengthening your page-fu mastery. You will complete the PaginationHelper class, which is a utility class helpful for querying paging information related to an array.

// The class is designed to take in an array of values and an integer indicating how many items will be allowed per each page. The types of values contained within the collection/array are not relevant.

// INPUT : 1) an array of values
//       : 2) an integer  // indicating how many items will be allowed per each page

// N.B : The types of values contained within the collection/array are not relevant.

class PaginationHelper {
	constructor(collection, itemsPerPage) {
		this.collection = collection;
		this.itemsPerPage = itemsPerPage;
		if (this.collection.length > 1) {
			this.maxPageBound = Math.round(
				this.collection.length / this.itemsPerPage
			);
			this.pageDict = {};
			this.indexPage = {};

			// initial states:
			//		(1) pageFlip: decides when to flip to the next page,
			//		(2) charNum: increments with the increasing chars in the collection list,
			let pageFlip = 1;
			let charNum = 0;
			this.pageDict[pageFlip] = charNum;

			// setup the page dictionary to update with items
			for (let i = 0; i < this.collection.length; i++) {
				charNum++;
				// increase the number of characters in the page by 1, this needs to be zero indexed according to the examples
				this.pageDict[pageFlip - 1] = charNum;
				// set the page number for the particular character
				this.indexPage[i] = pageFlip - 1;
				// move unto the next page if the char limit is exceeded
				if (charNum >= this.itemsPerPage) {
					pageFlip++;
					charNum = 0;
					this.pageDict[pageFlip - 1] = 1;
				}
			}
		}
	}

	// Method 1 :
	itemCount() {
		/**
		 * @dec : takes in an array of items and a integer indicating how many items fit within a single page
		 * @args : void
		 * @returns : (int) => no. of items within the entire collection
		 * */
		return this.collection.length;
	}

	// Method 2 :
	pageCount() {
		/**
		 * @desc : returns the numner of pages the items in the collection will take
		 * @args : void
		 * @returns : (int) => the total number of pages
		 */
		return Object.keys(this.pageDict).length;
	}

	// Method 3 :
	pageItemCount(index) {
		/**
		 * @desc : returns the number of items in a page, returns -1 if the page no. exceeds the limit
		 * @args : the page no. to search items for
		 * @returns : (int) => the no. of items in a page
		 */
		if (index < this.pageCount()) {
			return this.pageDict[index];
		} else {
			console.log(
				`[warn] The page input ${index} exceeds the max limit ${this.maxPageBound}`
			);
			return -1;
		}
	}

	// Method 4:
	pageIndex(itemIndex) {
		/**
		 * @desc : returns the number of items in a page, returns -1 if the page no. exceeds the limit
		 * @args : the page no. to search items for
		 * @returns : (int) => the no. of items in a page
		 */
		if (itemIndex < Object.keys(this.indexPage).length && itemIndex > 0) {
			return this.indexPage[itemIndex];
			// return this.indexPage[itemIndex];
		} else {
			return -1;
		}
	}
}

// // testing the class
// const pagination = new PaginationHelper(["a", "b", "c", "d", "e", "f"], 4);

// console.log(pagination);
// console.log("helper.pageCount(); //should == 2");
// console.log(pagination.pageCount());
// console.log("// helper.itemCount(); //should == 6");
// console.log(pagination.itemCount());

// // page item count tests
// console.log("helper.pageItemCount(0); //should == 4");
// console.log(pagination.pageItemCount(0));
// console.log("helper.pageItemCount(1); // last page - should == 2");
// console.log(pagination.pageItemCount(1));
// console.log("helper.pageItemCount(2); // should == -1 as page is invalid");
// console.log(pagination.pageItemCount(2));

// // page index tests
// console.log("helper.pageIndex(5); //should == 1 (zero based index)");
// console.log(pagination.pageIndex(5));
// console.log(" helper.pageIndex(2); //should == 0");
// console.log(pagination.pageIndex(2));
// console.log("helper.pageIndex(20); //should == -1");
// console.log(pagination.pageIndex(20));
// console.log("helper.pageIndex(-10); //should == -1");
// console.log(pagination.pageIndex(-10));
