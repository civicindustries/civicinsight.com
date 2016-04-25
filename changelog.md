---
layout: page
---
<style>
#page li {
    list-style: none;
    margin-left: auto;
    line-height: 25px;
}
#page {
    width: 65%;
}
</style>

#### <b> April 24, 2016 - v2.5.0 </b>
* <span class="label label-primary">New Feature</span> Go live with agency using our first planning data
* <span class="label label-success">Enhancement</span> Update to the latest version of Postgres
* <span class="label label-success">Enhancement</span> Update mailer digetst to send mails for active workflows and not only default workflow
* <span class="label label-success">Enhancement</span> Import records, addresses, owners and contacts in one call using v4 Accela API call
* <span class="label label-success">Enhancement</span> Add different priorities for email notifications. Priotizing things like "Forgot Password"
* <span class="label label-danger">Bug</span> Fix bug that causes characters in Accela API results to block import


#### <b> April 3, 2016 - v2.4.0 </b>
* <span class="label label-success">Enhancement</span> Add funtionality to add link to raw data source for record
* <span class="label label-success">Enhancement</span> Allow embeding in Citzen Access iframes
* <span class="label label-success">Enhancement</span> Optimize background workers
* <span class="label label-success">Enhancement</span> Switch to higher performance database
* <span class="label label-success">Enhancement</span> Update system and application libraries
* <span class="label label-success">Enhancement</span> Switch from MailChimp to SparkPost for email notifications
* <span class="label label-success">Enhancement</span> Configure a series of new agencies
* <span class="label label-success">Enhancement</span> Update caching functionality

#### <b> March 5, 2016 - v2.3.2 </b>
* <span class="label label-success">Enhancement</span> Improve performance of search 
* <span class="label label-warning">Minor</span> Remove unneeded margins in property page
* <span class="label label-warning">Minor</span> Change login header to my profile
* <span class="label label-warning">Minor</span> Adjustment to matching accounts not logging in from ACA
* <span class="label label-danger">Bug</span> Fix bug that prevented watchlist from loading

#### <b> March 3, 2016  - v2.3.1 </b>
* <span class="label label-success">Enhancement</span> Improve performance of staff dashboard by pre-calculating the numbers in background job

#### <b> February 26, 2016 - v2.3.0 </b>
* <span class="label label-primary">New Feature</span> Users with Accela Citizen Access accounts will be able to automatically login into Civic Insight
* <span class="label label-primary">New Feature</span> Allow logged in users to save their search results
* <span class="label label-primary">New Feature</span> When an event has a due available, display in the interface
* <span class="label label-primary">New Feature</span> Add support for adding disclaimer to email alerts
* <span class="label label-primary">New Feature</span> Add backend support to search cases by case type. Interface will be updated in future release.
* <span class="label label-primary">New Feature</span> Allow users to toggle between workflows in the dashboard
* <span class="label label-primary">New Feature</span> Create link to show agency when data was last updated
* <span class="label label-primary">New Feature</span> New chart: view commercial vs residential permits
* <span class="label label-primary">New Feature</span> New chart: view bar for weekly volume of work by workflow
* <span class="label label-success">Enhancement</span> Develop automatic detection of commercial vs residential permits
* <span class="label label-success">Enhancement</span> Make clustering in map results less common
* <span class="label label-success">Enhancement</span> Ensure that boundaries are sorted alphabetically
* <span class="label label-success">Enhancement</span> Add support to view progress bar for BLDS data
* <span class="label label-warning">Minor</span> By default, increase time range of dashboard
* <span class="label label-warning">Minor</span> Remove unused columns from database to decrease size of database
* <span class="label label-warning">Minor</span> Clean up the way we story agency settings
* <span class="label label-warning">Minor</span> Begin initial support to search by zipcode
* <span class="label label-warning">Minor</span> Begin adding support for getting notifications on saved search
* <span class="label label-warning">Minor</span> Add methods for testing quality of data
* <span class="label label-warning">Minor</span> Mention that Civic Insight is now part of Accela
* <span class="label label-danger">Bug</span> Fix bug that caused errors in processing background jobs
* <span class="label label-danger">Bug</span> When loading large amounts of data, make sure we index addresses in batches to better utilize resources
* <span class="label label-danger">Bug</span> Fix bug when filtering data
* <span class="label label-danger">Bug</span> Fix bug that prevented us from loading new boundaries
* <span class="label label-danger">Bug</span> Fix bug with notifying users without an agency defined


<hr/>
#### <b> February 5, 2016 - v2.2.0</b>
* <span class="label label-warning">Minor</span> Optimize queries in generic csv uploader
* <span class="label label-warning">Minor</span> Add functionality to create agencies with fake data for demos
* <span class="label label-warning">Minor</span> Add support for new demo-mode for new agencies in the Civic Platform

<hr/>
####  <b> January 27, 2016 - v2.1.1</b>
* <span class="label label-danger">Bug</span> Fix issue in staff dashboard that prevented calendar to flip to new year
* <span class="label label-warning">Minor</span> Adjustment to search button in watchlist
* <span class="label label-warning">Minor</span> Adjustment to logo font size in mobile

<hr/>
####  <b> January 11, 2016 - v2.1.0</b>
* <span class="label label-primary">New Feature</span> Auto scale the number of workers processing background data
* <span class="label label-primary">New Feature</span> Improve performance of dashboard by pre-processing data in the background
* <span class="label label-warning">Minor</span> Update moment.js date library
* <span class="label label-warning">Minor</span> Add link to submit request in Austin

<hr/>
####  <b> January 10, 2016 - v2.0.4</b>
* <span class="label label-success">Enhancement</span> Automatically create agencies on the Civic Platform
* <span class="label label-success">Enhancement</span> Automatically import data for agencies on Civic Platform

<hr/>
####  <b> December 19, 2015 - v2.0.3</b>
* <span class="label label-danger">Bug</span> Fix link to reset password
* <span class="label label-danger">Bug</span> Fix issue where events with similar dates would show wrong 'approved/pending' icon.

<hr/>
####  <b> December 1, 2015 - v2.0.2</b>
* <span class="label label-danger">Bug</span> Fix issue in searching for case numbers

<hr/>
####  <b> November 30, 2015 -  v2.0.1</b>
* <span class="label label-warning">Minor</span> Minor adjustments to staff dashboard

<hr/>
####  <b> November 27, 2015 - v2.0.0</b>
* <span class="label label-primary">New Feature</span> New city staff interface
* <span class="label label-primary">New Feature</span> New admin interface
* <span class="label label-primary">New Feature</span> Email Notifications now include descriptions
* <span class="label label-primary">New Feature</span> Now require SSL connection for sites civicinsight.com domain
* <span class="label label-success">Enhancement</span> Improve performance to search 
* <span class="label label-success">Enhancement</span> Increase test converage
* <span class="label label-success">Enhancement</span> Simplify API endpoints
* <span class="label label-success">Enhancement</span> Major performance improvements and simplification of API payloads
* <span class="label label-success">Enhancement</span> Restructure agencies easily add new agencies
* <span class="label label-success">Enhancement</span> Use SideKiq for background queue for notifications
* <span class="label label-warning">Minor</span> Remove streetview
* <span class="label label-warning">Minor</span> Add new high resolution logos
* <span class="label label-warning">Minor</span> Upgrade Rails framework to version 4 and related libraries
* <span class="label label-warning">Minor</span> Minor adjustments to menu interface


<hr/>
####  <b> November 1, 2015 -  v1.20.14</b>
* <span class="label label-success">Enhancement</span> Add additional database indexes for performance improvements

<hr/>
####  <b> October 31, 2015 -  v1.20.13</b>
* <span class="label label-success">Enhancement</span> Improve performance on the dashboard

<hr/>
####  <b> October 29, 2015 -  v1.20.12</b>
* <span class="label label-danger">Bug</span> Fix issue where the cache of case events was not automatically cleared on under certain circumstances 

<hr/>
####  <b> October 12, 2015 -  v1.20.11</b>
* <span class="label label-success">Enhancement</span> Add support for pie charts in dashboard

<hr/>
####  <b> September 23, 2015 -  v1.20.10</b>
* <span class="label label-warning">Minor</span> Change links to UserVoice from Desk.com
* <span class="label label-warning">Minor</span> Improve to email notifications for cases without events
* <span class="label label-warning">Minor</span> Minor adjustments to date ranges for certain clients
* <span class="label label-success">Enhancement</span> Improve geocoding for clients

<hr/>
####  <b> September 7, 2015 -  v1.20.9</b>
* <span class="label label-success">Enhancement</span> Add support for historical data when available

<hr/>
####  <b> August 30, 2015 -  v1.20.8</b>
* <span class="label label-success">Enhancement</span> Add better support for CKAN datasets
* <span class="label label-success">Enhancement</span> Add support for historical data for agencies
* <span class="label label-danger">Bug</span> Fix bug with matching certain mis-formatted addresses

<hr/>
####  <b> August 25, 2015 -  v1.20.7</b>
* <span class="label label-success">Enhancement</span> Fix configurations for a number of agencies
* <span class="label label-success">Enhancement</span> Add better support for BLDS data format

<hr/>
####  <b> August 06, 2015 -  v1.20.6</b>
* <span class="label label-danger">Bug</span> Fix icons in address history
* <span class="label label-warning">Minor</span> Load additional datasources

<hr/>
####  <b> August 02, 2015 -  v1.20.5</b>
* <span class="label label-success">Enhancement</span>  Notifications are now sent when the status of a case changes

<hr/>
####  <b> July 29, 2015 -  v1.20.4</b>
* <span class="label label-danger">Bug</span> Fix bug where inactive workflows were still showing up in autocomplete
* <span class="label label-danger">Bug</span>  Fix bug where deleting records caused inaccurate search results
* <span class="label label-danger">Bug</span>  Ensure that we display date for case even if description is not present
* <span class="label label-success">Enhancement</span> Adjust footer and sidebar in Trends page
* <span class="label label-primary">New Feature</span> Add feature that allows visitors to flag inaccurate maps on address page

<hr/>
####  <b> July 21, 2015 -  v1.20.3</b>
* <span class="label label-success">Enhancement</span> Make "My Account" a link when not logged in
* <span class="label label-danger">Bug</span>  Remove the counter from addresses in users profile page due to bugs
* <span class="label label-warning">Minor</span> Set a higher zoom level for subscriptions in watchlist page

<hr/>
####  <b> July 20, 2015 -  v1.20.2</b>
* <span class="label label-warning">Minor</span>  Add option to resolve issue where Google Streeview showed building interiors

<hr/>
####  <b> July 19, 2015 -  v1.20.1</b>
* <span class="label label-warning">Minor</span>  Limit search results to 100 by default

<hr/>
####  <b> July 19, 2015 -  v1.20.0</b>
* <span class="label label-danger">Bug</span>  Fix bug where the text '0 results found' displayed twice
* <span class="label label-success">Enhancement</span> Show accurate result counts, not just "many results"
* <span class="label label-warning">Minor</span> Standardize the URL params across all agencies, for example, remove 'phase' and only support 'step' in URL param
* <span class="label label-success">Enhancement</span> Show comments in cases if coments are present on property page
* <span class="label label-success">Enhancement</span> Change search lookup to search inside the events table instead of cases, which gives much more granular search
* <span class="label label-warning">Minor</span> Capitalize street coordinates in addresses
* <span class="label label-success">Enhancement</span> Add option to hide case status in property page
* <span class="label label-warning">Minor</span> Create task to ensure contact information is not duplicated in property page
* <span class="label label-warning">Minor</span>  Update workflow history using new API calls from Accela
* <span class="label label-warning">Minor</span> Create ability to delete older cases as required by cities retention policies
* <span class="label label-danger">Bug</span> Accela comments appended into older cases
* <span class="label label-danger">Bug</span> Refine geocoding for missing addresses
* <span class="label label-danger">Bug</span> Fix generic CSV updater and check against Austin
* <span class="label label-warning">Minor</span> Link directly to permit number from email notifications

<hr/>
####  <b> June 24, 2015 -  v1.19.0</b>
* <span class="label label-warning">Minor</span> Update to newest version of New Relic
* <span class="label label-warning">Minor</span> Include new performance testing system
* <span class="label label-warning">Minor</span> Update to the latest gems
* <span class="label label-warning">Minor</span> Limit pagination to 10 pages
* <span class="label label-warning">Minor</span> Increase default time range in search
* <span class="label label-warning">Minor</span> Remove "state" from query
* <span class="label label-warning">Minor</span> Add indexes to address geopins to improve performance

<hr/>
####  <b> June 21, 2015 -  v1.18.14</b>
* <span class="label label-warning">Minor</span> Add configuration to close out status bar when case is closed
* <span class="label label-warning">Minor</span> Update to latest version of SASS
* <span class="label label-success">Enhancement</span> Add support for Bitly link shortening
* <span class="label label-success">Enhancement</span> Add tooltips throughout interface
* <span class="label label-warning">Minor</span> Fix typos in filter interface
* <span class="label label-warning">Minor</span> Expire address cache every hour
* <span class="label label-warning">Minor</span> Disable showing maps in property page in favor of streetview
* <span class="label label-warning">Minor</span> Add support to search by case state not just event
* <span class="label label-success">Enhancement</span> In property page show the last comment for an event instead of first
* <span class="label label-success">Enhancement</span> Update Sphinx to support delta updates for improved accuracy
* <span class="label label-success">Enhancement</span> Add better support for foreclosure and demolition data
* <span class="label label-warning">Minor</span>  Allow the use case of 'phase' in url
* <span class="label label-warning">Minor</span>  Simplify language in search interface
* <span class="label label-danger">Bug</span> Fix footer in trends page
* <span class="label label-warning">Minor</span> Make minor adjustments to styling

<hr/>
####  <b> May 11, 2015 -  v1.18.13</b>
* <span class="label label-success">Enhancement</span>  Use the cases table as primary search table
* <span class="label label-warning">Minor</span> Minor adjustments to update language in search interface
* <span class="label label-warning">Minor</span> Add support for grouping together Legal Actions in Austin
* <span class="label label-warning">Minor</span> Re-enable clustering of map results

<hr/>
####  <b> May 03, 2015 -  v1.18.12</b>
* <span class="label label-danger">Bug</span> Fix issue with some types of searches did not return results

<hr/>
####  <b> May 06, 2015 -  v1.18.11</b>
* <span class="label label-success">Enhancement</span> Distinguish between polygons and multipolygons
* <span class="label label-danger">Bug</span> Fix issue that occured when toggling and refreshing boundary search options
* <span class="label label-warning">Minor</span> Clean up the interface for dashboard
* <span class="label label-warning">Minor</span> Turn off support for 'current location'
* <span class="label label-warning">Minor</span> Enable spiderfy on zoom for maps
* <span class="label label-warning">Minor</span> Upgrade clustering javascript
* <span class="label label-warning">Minor</span> Add case state to property page
* <span class="label label-success">Enhancement</span> Add support for delta updates in search

<hr/>
####  <b> May 03, 2015 -  v1.18.10</b>
* <span class="label label-warning">Minor</span> Simplify sentence structure in search interface
* <span class="label label-warning">Minor</span> Add support for historial data
* <span class="label label-warning">Minor</span> Add support for displaying violations in places like NOLA
* <span class="label label-warning">Minor</span> Remove requirement for agency_id on API query
* <span class="label label-warning">Minor</span> Minor adjustments to style
* <span class="label label-warning">Minor</span> Add additional boundaries to Sacramento
* <span class="label label-warning">Minor</span> Add support for kramdown to generate templates
* <span class="label label-warning">Minor</span> Re-introduce clustering of results
* <span class="label label-warning">Minor</span> Do not autoforward to specific address when doing advanced searches. Only for simple searches.
* <span class="label label-warning">Minor</span> Add support for password protected sites
* <span class="label label-success">Enhancement</span> Update Accela importers to use v2 importers for loading records
* <span class="label label-warning">Minor</span> Decrease size of search box font
* <span class="label label-warning">Minor</span> Hide search tips when clicking map
* <span class="label label-success">Enhancement</span> Show boundaries for each agency
* <span class="label label-warning">Minor</span> Limit heatmap to avoid crashes
* <span class="label label-warning">Minor</span> When doing boundary searches, do not redirect if only one result is found
* <span class="label label-warning">Minor</span> Limit intial search results to 200
* <span class="label label-warning">Minor</span> Simplify and reduce size payload of search results
* <span class="label label-success">Enhancement</span> Add support for adding link to tour page
* <span class="label label-success">Enhancement</span> Add 'ever' to the search interface
* <span class="label label-success">Enhancement</span> Add 'Permit Issued' to BuildFax data defaults

<hr/>
####  <b> May 19, 2015 -  v1.18.9</b>
* <span class="label label-primary">New Feature</span> Add support for menu item in menu called "Tour"
* <span class="label label-primary">New Feature</span> Add support for searching case numbers as well as addresses
* <span class="label label-warning">Minor</span>  Make sure calls to Google Street View are https

<hr/>
####  <b> May 17, 2015 -  v1.18.8</b>
* <span class="label label-primary">New Feature</span>  Create a FAQ page that can be enabled for different agencies
* <span class="label label-danger">Bug</span> Fix a number  of typos

<hr/>
####  <b> May 16, 2015 -  v1.18.7</b>
* <span class="label label-primary">New Feature</span>  Add support to enable parcel layer for individual agencies
* <span class="label label-danger">Bug</span> Fix issue where watchlist API call was being called twice

<hr/>
####  <b> May 12, 2015 -  v1.18.6</b>
* <span class="label label-primary">New Feature</span>  Select custom range with max of 3 months dashboard
* <span class="label label-success">Enhancement</span> Add caching to heatmap call
* <span class="label label-warning">Minor</span> Use capitalize instead of titleize for addresses because of spacing errors
* <span class="label label-warning">Minor</span> Change labels in sidebar for Trends page
* <span class="label label-success">Enhancement</span> If there is lag in data update by a couple of weeks and it's a new month, use previous month for stats
* <span class="label label-warning">Minor</span> Increase default time frame trends
* <span class="label label-warning">Minor</span> Adjust max height of boundaries list in search interface
* <span class="label label-warning">Minor</span> Disable parcel layer cities
* <span class="label label-success">Enhancement</span> Set option to enable crime indicents only for Dallas
* <span class="label label-warning">Minor</span> Show loading bar in heatmap
* <span class="label label-success">Enhancement</span> Optimize AJAX payload
* <span class="label label-primary">New Feature</span>  Display new preview markup
* <span class="label label-primary">New Feature</span>  Update sidebar to use data sources content.
* <span class="label label-success">Enhancement</span> Collapse search menu in small screens
* <span class="label label-warning">Minor</span> Slight adjustments to IE
* <span class="label label-success">Enhancement</span> Use https for fonts
* <span class="label label-warning">Minor</span> Expire cache after a day
* <span class="label label-success">Enhancement</span> More descriptive autocomplate
* <span class="label label-primary">New Feature</span>  Add support for gravatar photo in profile
* <span class="label label-success">Enhancement</span> Add basic support for delta updates to indexes
* <span class="label label-warning">Minor</span> Change "watchlist" button to "email me"
* <span class="label label-warning">Minor</span> Slightly more aggressive stripping of street names spellings for improve matching of addresses
* <span class="label label-success">Enhancement</span> Limit initial search to only active workflows

<hr/>
####  <b> May 03, 2015 -  v1.18.5</b>
* <span class="label label-warning">Minor</span> Minor styling adjustments
* <span class="label label-primary">New Feature</span> Show "incidents" button only when enabled

<hr/>
####  <b> May 03, 2015 -  v1.18.4</b>
* <span class="label label-primary">New Feature</span>  Improve performance by precompiling address tooltips
* <span class="label label-primary">New Feature</span>  Add ability to toggle and use Google Maps when needed
* <span class="label label-primary">New Feature</span>  Display incidents on tooltip

<hr/>
####  <b> April 25, 2015 -  v1.18.3</b>
* <span class="label label-primary">New Feature</span>  Improve time it takes to onboard new agencies with BuildFax data
* <span class="label label-danger">Bug</span> Fix issue with duplicate items on watchlist
* <span class="label label-primary">New Feature</span>  Enable polygons for neighborhoods

<hr/>
####  <b> April 20, 2015 -  v1.18.2</b>
* <span class="label label-primary">New Feature</span> Add all the possible boundary searches in sample search interface

<hr/>
####  <b> April 20, 2015 -  v1.18.1</b>
* <span class="label label-danger">Bug</span> Fix issue with unique case numbers on workflows

<hr/>
####  <b> April 20, 2015 -  v1.18.0</b>
* <span class="label label-warning">Minor</span> Limit indexing addresses with no geo points
* <span class="label label-danger">Bug</span> Fix styling in mobile

<hr/>
####  <b> April 19, 2015 -  v1.18.0</b>
* <span class="label label-primary">New Feature</span>  Improve performance by not indexing properties that cannot be mapped
* <span class="label label-danger">Bug</span> Fix minor styling bugs in mobile
* <span class="label label-success">Enhancement</span> Increase maximum possible timeframe to search
* <span class="label label-primary">New Feature</span>  Improved performance when typing street with multiple spellings
* <span class="label label-success">Enhancement</span> Add extra validation to addresses that come from Accela API
* <span class="label label-success">Enhancement</span> Improvements to search response times
* <span class="label label-primary">New Feature</span>  Add support for clearning search results
* <span class="label label-primary">New Feature</span>  Create friendlier error pages
* <span class="label label-primary">New Feature</span>  Simplify searching by boundary
* <span class="label label-primary">New Feature</span>  Automatically forward to address when extact match is made
* <span class="label label-warning">Minor</span> Make minor adjustments to boundary search
* <span class="label label-danger">Bug</span> Fix styling in IE
* <span class="label label-primary">New Feature</span>  Add support for pagination of search results
* <span class="label label-danger">Bug</span> Fix issues with autocomplete performance
* <span class="label label-warning">Minor</span>  Upgrade Mapbox library for mapping
  
<hr/>
####  <b> April 03, 2015 -  v1.17.12</b>
* <span class="label label-danger">Bug</span>Fix issues with pagination and grouping

<hr/>
####  <b> April 03, 2015 -  v1.17.11</b>
* <span class="label label-warning">Minor</span> Minor UI clean up to search query interface

<hr/>
####  <b> April 03, 2015 -  v1.17.10</b>
* <span class="label label-primary">New Feature</span>  Use additional constraints on geospatial and boundary searches 

<hr/>
####  <b> April 02, 2015 -  v1.17.9</b>
* <span class="label label-success">Enhancement</span> Add additional support for geocoding with multiple vendors
* <span class="label label-danger">Bug</span> Fix issues with wrong label for code enforcement cases
* <span class="label label-danger">Bug</span> Fix minor styling issues in mobile

<hr/>
####  <b> March 30, 2015 -  v1.17.8</b>
* <span class="label label-warning">Minor</span> Improve street view support
* <span class="label label-success">Enhancement</span> Improve perfomance of search results load time
* <span class="label label-primary">New Feature</span>  Add additional caching for performance

<hr/>
####  <b> March 27, 2015 -  v1.17.7</b>
* <span class="label label-success">Enhancement</span> Improve styling of date picker
* <span class="label label-danger">Bug</span> Fix issues with accuracy in search 
* <span class="label label-success">Enhancement</span> Improve Improve autocomplete performance
* <span class="label label-warning">Minor</span> Change search box to say "search" instead of "go"
 
<hr/>
####  <b> March 22, 2015 -  v1.17.6</b>
* <span class="label label-warning">Minor</span> Change limit results to 150 for now
* <span class="label label-primary">New Feature</span>  Add support for autocompleting case numbers as well as addresses
* <span class="label label-warning">Minor</span> Rename boundaries search box 'neighborhoods & districts'
* <span class="label label-primary">New Feature</span>  Use Sphinx for improved search performance
* <span class="label label-primary">New Feature</span>  Use typeahead.js library for autocomplete
* <span class="label label-danger">Bug</span> Fix a few data issues with Trends page

<hr/>
####  <b> March 15, 2015 -  v1.17.5</b>
* <span class="label label-success">Enhancement</span> Add clearer filters in front end
* <span class="label label-success">Enhancement</span> Automatically cache boundaries
* <span class="label label-warning">Minor</span> Make minor adjustments to autocomplete
* <span class="label label-success">Enhancement</span> Autocomplete will now only be using cache
* <span class="label label-success">Enhancement</span> Autocomplete returns in order of importance

<hr/>
####  <b> March 13, 2015 -  v1.17.4</b>
* <span class="label label-warning">Minor</span> Remove help from footer
* <span class="label label-success">Enhancement</span> Iecrease search length requirement
* <span class="label label-success">Enhancement</span> Improve search by pre-caching addresses and streets seperetely

<hr/>
####  <b> March 6, 2015 -  v1.17.3</b>
* <span class="label label-warning">Minor</span> Remove unused javascript that was breaking property history in IE
* <span class="label label-primary">New Feature</span>  Add support general purpose incidents
* <span class="label label-success">Enhancement</span> Add support for calculating and showing how far "incidents" occured from an address

<hr/>
####  <b> March 4, 2015 -  v1.17.2</b>
* <span class="label label-primary">New Feature</span>  Add initial support for BuildFax inspections 
* <span class="label label-primary">New Feature</span>  Add support for a variety of plan checks supported in Accela

<hr/>
####  <b> March 1, 2015 -  v1.17.1</b>
* <span class="label label-primary">New Feature</span>  Add boundary type to query for faster search results
* <span class="label label-danger">Bug</span> Fix issue with 'load more' text showing even number if all results were returned
* <span class="label label-primary">New Feature</span>  Add better support for distiguishing between regular searches and boundary searches

<hr/>
####  <b> February 28, 2015 -  v1.17.0</b>
* <span class="label label-danger">Bug</span> Fix issue of load more button not showing on subsequent searches
* <span class="label label-success">Enhancement</span> Remove titleize from addresses in autocomplete because it adds an extra space to addresses with numeric street names
* <span class="label label-success">Enhancement</span> Increase timeout length in server
* <span class="label label-success">Enhancement</span> Change labels of 'ever' to use actual data from how far back the site goes
* <span class="label label-danger">Bug</span> Fix issues with stale URL routes
* <span class="label label-primary">New Feature</span>  Add support for BuildFax data
* <span class="label label-success">Enhancement</span> When viewing property, respond with precompiled markup
* <span class="label label-danger">Bug</span>Fix issue with watchlist buttons not clicking
* <span class="label label-danger">Bug</span> Fix minor style issues in IE9
* <span class="label label-danger">Bug</span>Fix dates for MM/DD/YYYY formats in CSV importer