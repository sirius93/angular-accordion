import { Component } from '@angular/core';
import { AccordionComponent } from 'angularx-accordion';
import {AccordionToggleComponent } from 'angularx-accordion';
import { Accordion } from 'angularx-accordion/accordion';
declare var require: any;
const accordionJSON = require('./accordion.json');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  componentsMap: any;
     public accordionJSON: any = accordionJSON;
     public expander: Accordion = Object.assign({}, accordionJSON, {module: {variantID: '2'}});
     public accordion: Accordion = Object.assign({}, accordionJSON, {module: {variantID: '1'}});

     public variationOne = `<dui-accordion [data]='variationwithoutImage' [componentsMap]="componentsMap"></dui-accordion>`;
     public variationTwo = `<dui-accordion [data]='variationwithImage' [componentsMap]="componentsMap"></dui-accordion>`;
     public variationThree = `<dui-accordion [data]="expander" [componentsMap]="componentsMap"></dui-accordion>`;
     public variationFour = `<dui-accordion>
    This is a outer header
    <dui-accordion-container>
        <div class="dui-accordion-header">
            <span>Accordion Header 1</span>
            <button>
                <dui-accordion-toggle>Custom clickable heading</dui-accordion-toggle>
            </button>
        </div>
        <div class="dui-accordion-body">
            <div>Accordion body 1</div>
        </div>
    </dui-accordion-container>
    <dui-accordion-container> 
        <div class="dui-accordion-header">
            <div>Accordion Header 1</div>
        </div>
        <div class="dui-accordion-body">
            <div>Accordion body 1</div>
        </div>
    </dui-accordion-container>
</dui-accordion>`;
}
