# Project Cascada
#### Suspenseful CSR React Pages

Project Cascada looks to build a proof of concept (POC) that completely shifts how we approach building applications. This project will ditch NextJS (which is plagued with problems and unstable releases) and SSR rendering to instead serve a static page that consists of suspenseful skeletons that match the pages content, that then are populated in a waterfall effect as components and content become available. The best example you can find of this is the AirBnB home page. In this POC, there is no run-time server involved, just static files being served from S3/Cloudfront.

Aside from just swapping out NextJS for React and utilizing React Lazy/Suspense, we will also be implementing human pleasing suspenseful loaders and css driven intro animations for the content to populate so it doesn’t look “janky.” The end result will be a page that gives the impression of being lightning fast regardless of device or connection speed. We will also be recreating some components used and will be utilizing more CSS for animations instead of being driven by JS to improve performance.

The layout will mostly be retained, though some minor changes to placeholders like where ads will appear will be modified to make the page appear more cohesive through the transition of content appearing. More graphical mockups will be available soon.

This project will build a POC that focuses on above the fold and upper page content to demonstrate what we could do (first with SRP, then LDP). If the project is green-lit, a separate project card will be created to outline how to transition our current pages to the future state.

This project will use Vite, and React 18 for static generation and SSR.
