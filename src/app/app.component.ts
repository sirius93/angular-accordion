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

     public variationOne = `<ngx-accordion [data]='variation1' ></ngx-accordion>`;
     public variationTwo = `<ngx-accordion [data]='variation2' ></ngx-accordion>`;
     public variationThree = `<ngx-accordion [data]="expander" ></ngx-accordion>`;
     public variationFour = `<ngx-accordion>
    This is a outer header
    <ngx-accordion-container>
        <div class="ngx-accordion-header">
            <span>Accordion Header 1</span>
            <button>
                <ngx-accordion-toggle>Custom clickable heading</ngx-accordion-toggle>
            </button>
        </div>
        <div class="ngx-accordion-body">
            <div>Accordion body 1</div>
        </div>
    </ngx-accordion-container>
    <ngx-accordion-container> 
        <div class="ngx-accordion-header">
            <div>Accordion Header 1</div>
        </div>
        <div class="ngx-accordion-body">
            <div>Accordion body 1</div>
        </div>
    </ngx-accordion-container>
</ngx-accordion>`;
}
