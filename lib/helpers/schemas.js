/**
 * This is the global function to handle the
 * created_by schema column.
 * @return {string} The user _id.
 */
createdBy = function() {
  if (this.isInsert) {
    return this.userId || this.value;
  } else if (this.isUpdate) {
    this.unset();
  } else {
    return this.value;
  }
};

/**
 * This function will set the default date_created
 * for the schemas.
 * @return {date} The date created.
 */
dateCreated = function() {
  if (this.isInsert) {
    return new Date();
  } else if (this.isUpdate) {
    this.unset();
  } else {
    return this.value;
  }
};

/**
 * This function will set the modified_by column
 * in the schemas.
 * @return {string} The user _id.
 */
modifiedBy = function() {
  if (this.isUpdate) {
    return this.userId || this.value;
  } else {
    this.unset();
  }
};

/**
 * This function will set the date_modified field
 * in the schemas.
 * @return {date} The date modified.
 */
dateModified = function() {
  if (this.isUpdate) {
    return new Date();
  } else {
    this.unset();
  }
};