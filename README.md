# AccordionExample

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Accordion Module

## Description
 The accordion module will contain descriptions about products and features with a header and subheader
 It can also contain modules that can be dyanmically injected into it. same applies to the expander variant of it.

## Variations
This module contains three variants:
1\. Accordion
2\. Expander
3\. Accordion as functionality

In accordions if one accordion is open all other accordions will be closed,

## Link to the json
The json data for the accordion and its variants is at [Accordion-json](./accordion.json)

* * *

#### Variation 1 <span class="label label-default text-uppercase">json</span>

* * *

      var accordion = {
      "module": {
        "variantID": "1"
      },
      "content": [
        {
          "header": "H4 copy secondary header 22px",
          "content": "p copy 14 px Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
          "header": "H4 copy secondary header 22px",
          "content": "p copy 14 px Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
          "header": "H4 copy secondary header 22px",
          "content": "p copy 14 px Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        }
      ]
    }

#### Variation 1 <span class="label label-default text-uppercase">usage</span>

* * *

#### ######
``` <ngx-accordion [data]="accordion"></ngx-accordion> ```

* * *

#### Variation 2 <span class="label label-default text-uppercase">json</span>

    var expander = {
      "module": {
        "variantID": "2"
      },
      "content": [
        {
          "header": "H4 copy secondary header 22px",
          "content": "p copy 14 px Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
          "header": "H4 copy secondary header 22px",
          "content": "p copy 14 px Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
          "header": "H4 copy secondary header 22px",
          "content": "p copy 14 px Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        }
      ]
    }

* * *

#### Variation 2 <span class="label label-default text-uppercase">usage</span>

* * *

#### ######
``` <ngx-accordion [data]="expander"></ngx-accordion> ```

* * *

#### Variation 4 <span class="label label-default text-uppercase">json</span>

* * *

          No JSON | using tags

* * *

#### Variation 4 <span class="label label-default text-uppercase">usage</span>

* * *
``` 
    <ngx-accordion>
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
            <div class=" ngx-accordion-header ">
                <div>Accordion Header 2</div>
            </div>
            <div class="ngx-accordion-body">
                <div>Accordion body 2</div>
            </div>
    </ngx-accordion
```

* * *    

live Example here: 	[https://sirius93.github.io/angular-accordion/](https://sirius93.github.io/angular-accordion/)
