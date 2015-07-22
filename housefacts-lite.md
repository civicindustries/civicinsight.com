---
layout: page
---

# HouseFacts Lite

HouseFacts Lite is a data format that describes the required and recommended fields to display to Code Enforcement data within Civic Insight. The Housefacts Lite is a simplified version of Housefacts standard developed by Code for America.

<br>

<a class="menu-button btn-glow primary btn-submit signup" href="/assets/housefacts-lite.pdf">Download PDF</a>


<br>
<br>
### Cases



| Name   |      Type      |  Requirement |  Description |
|----------|:-------------:|------:|
| case_id |  string | Required | Unique ID for case; format provided by municipality |
| house_number |  string | Required | 155 |
| street_name |  string | Required | N 9th St |
| city |  string | Required | San Francisco |
| state |  string | Required | CA |
| latitude |  number | Required | Longitude of the residential building parcel. This field must be a valid WGS 84 longitude. For example ­122.4024658 |
| longitude |  number | Required | Latitude of the residential building parcel. This field must be a valid WGS 84 latitude. For example 37.7859547 |
| opened_date |  string | Required | The date the case is opened. Date of the inspection in YYYY­-MM-­DD format |
| closed_date |  string | Optional | The date the case is closed. Date of the inspection in YYYY­-MM-­DD format |
| department |  string | Required | (ie: Building, Code Enforcement, Health, ...) |
| case_type |  string | Required | Type of case (ie: Violation, Building Permit) |
| description |  string | Optional | ie: Repair roof |
| case_contact |  string ­ pipe delimited (name\|phone\|email) | Optional | contact information for property (owner, permit applicant, or ...) |
| case_manager |  string ­ pipe delimited (name\|phone\|email) | Optional | contact information for the city staff actioning event (ie: “Jane Cityworker|222\-­333\-­4444|jcityworker@ examplecity.gov”) |
| date_updated |  string | Required | Most recent date this record was updated in this cases.csv file YYYY­-MM-­DD format |


<br>
<br>
### Events

| Name   |      Type      |  Requirement |  Description |
|----------|:-------------:|------:|
| event_id |  string | Required | Unique ID for event; format provided by municipality |
| case_id |  string | Required | Unique ID for case for which event occurred; format provided by municipality (Note: if this data is supplemental to house_facts please provide the inspection_id) |
| name |  string | Required | Name of event occurred (ie: Initial Hearing, Notice of Hearing, Demolition, Foreclosure, Gas & Water Plan Check Review, Electric Plan Check Review) |
| status_date |  string | Required | Date of the event in YYYY-­MM-­DD format |
| status |  string | Required | (ie: Complete, Not Approved, Approved, Guilty, Scheduled, Pending) |
| notes |  string | Optional | additional notes or comments related to the event |
| contact |  string, pipe delimited (name\|phone\|email) | Optional | contact information for the city staff actioning event (ie: “Jane Cityworker\|222­\-333\-­4444\|jcityworker@city.com”) |
| date_updated |  string | Required | Most recent date this record was updated in this events.csv file YYYY­-MM-­DD format |

