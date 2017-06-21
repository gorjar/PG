/*
 * Copyright 2017 GMO. All Rights Reserved
 */
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var BaseWebControl_1 = require("../base/BaseWebControl");
var SubjectsComponent = (function (_super) {
    __extends(SubjectsComponent, _super);
    function SubjectsComponent(rootLocator) {
        var _this = _super.call(this, rootLocator) || this;
        _this.rootLocator = rootLocator;
        _this.ADD_BUTTON = protractor_1.by.id('add_button');
        _this.SUBJECTS_ADD_BUTTON = protractor_1.by.id('add-subject-button');
        _this.ADD_LECTURER_FIELD = protractor_1.by.id('lecturer_field');
        _this.ADD_SUBJECT_FIELD = protractor_1.by.id('subject_field');
        _this.TABLE_ROW = protractor_1.by.id('subjects_row');
        _this.DELETE_BUTTON = protractor_1.by.id('delete_button');
        _this.LECTURER_SUBJECT_FIELD = protractor_1.by.id('lecturer_content_field');
        _this.EDIT_BUTTON = protractor_1.by.id('edit_button');
        _this.EDIT_LECTURER = protractor_1.by.id('edit_lecturer');
        _this.EDIT_SUBMIT_BUTTON = protractor_1.by.id('edit_submit_button');
        return _this;
    }
    SubjectsComponent.buildSubjectsComponent = function () {
        return new SubjectsComponent(protractor_1.by.id('subjects_component'));
    };
    SubjectsComponent.prototype.waitForSubjectsRow = function () {
        this.waitForElementToBeDisplayedInRootElement(this.TABLE_ROW);
    };
    SubjectsComponent.prototype.waitForAddSubjectButton = function () {
        this.waitForElementToBeDisplayedInRootElement(this.SUBJECTS_ADD_BUTTON);
    };
    SubjectsComponent.prototype.clickAddSubjectButton = function () {
        return this.clickElement(this.SUBJECTS_ADD_BUTTON);
    };
    SubjectsComponent.prototype.clickAddButton = function () {
        return this.clickElement(this.ADD_BUTTON);
    };
    SubjectsComponent.prototype.clickDeleteButton = function () {
        return this.clickElement(this.DELETE_BUTTON);
    };
    SubjectsComponent.prototype.typeInLecturerField = function (lecturer) {
        this.putTextIntoElement(this.ADD_LECTURER_FIELD, lecturer);
    };
    SubjectsComponent.prototype.typeInSubjectField = function (subject) {
        this.putTextIntoElement(this.ADD_SUBJECT_FIELD, subject);
    };
    SubjectsComponent.prototype.getLecturerContent = function () {
        return this.getText(this.LECTURER_SUBJECT_FIELD);
    };
    SubjectsComponent.prototype.clickEditButton = function () {
        return this.clickElement(this.EDIT_BUTTON);
    };
    SubjectsComponent.prototype.clickEditSubmitButton = function () {
        return this.clickElement(this.EDIT_SUBMIT_BUTTON);
    };
    SubjectsComponent.prototype.clearLecturerField = function () {
        this.removeTextFromElement(this.EDIT_LECTURER);
    };
    SubjectsComponent.prototype.editLecturerField = function (lecturer) {
        this.putTextIntoElement(this.EDIT_LECTURER, lecturer);
    };
    return SubjectsComponent;
}(BaseWebControl_1.BaseWebCOntrol));
exports.SubjectsComponent = SubjectsComponent;
