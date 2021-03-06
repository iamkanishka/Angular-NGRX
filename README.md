# Angular - NGRX

<p align="center">
<a  target="blank"><img src="https://longnguyenduy.gallerycdn.vsassets.io/extensions/longnguyenduy/angular-ngrx-long/0.0.7/1577265251205/Microsoft.VisualStudio.Services.Icons.Default" width="320" alt="Coder Logo" /></a>
</p>

What is NgRx?

NgRx is a framework for building reactive applications in Angular. NgRx provides state management, isolation of side effects, entity collection management, router bindings, code generation, and developer tools that enhance developers experience when building many different types of applications.

Why NgRx for State Management?
NgRx provides state management for creating maintainable explicit applications, by storing single state and the use of actions in order to express state changes.

Serializability
By normalizing state changes and passing them through observables, NgRx provides serializability and ensures state is predictably stored. This enables to save the state to an external storage, for example, localStorage.

In addition, it also allows to inspect, download, upload, and dispatch actions, all from the Store Devtools.

Type Safety
Type safety is promoted throughout the architecture with reliance on the TypeScript compiler for program correctness.

Encapsulation
Using NgRx Effects and Store, any interaction with external resources side effects, like network requests, web socket and any business logic can be isolated from the UI. This isolation allows for more pure and simple components, and keep the single responsibility principle.

Testable
Because Store uses pure functions for changing state and selecting data from state, and the ability to isolate side effects from the UI, testing becomes very straightforward. NgRx also provides tests setup like provideMockStore and provideMockActions for isolated tests, and a better test experience.

Performance
Store is built on a single immutable data state, making change detection turn into a very easy task using an OnPush strategy. NgRx is also powered by memoized selector functions which optimize state query computations.

<b> NGRX State Managment LifeCycle</b>
<p align="center">
<a  target="blank"><img src="https://ngrx.io/generated/images/guide/store/state-management-lifecycle.png" width="320" alt="Coder Logo" /></a>
</p>

Why use NgRx Store for State Management?
NgRx Store provides state management for creating maintainable, explicit applications through the use of single state and actions in order to express state changes. In cases where you don't need a global, application-wide solution to manage state, consider using NgRx ComponentStore which provides a solution for local state management.

When Should I Use NgRx Store for State Management?
In particular, you might use NgRx when you build an application with a lot of user interactions and multiple data sources, or when managing state in services are no longer sufficient.

A good guideline that might help answer the question, "Do I need NgRx Store?" is the SHARI principle:

Shared: state that is accessed by many components and services.

Hydrated: state that is persisted and rehydrated from external storage.

Available: state that needs to be available when re-entering routes.

Retrieved: state that must be retrieved with a side-effect.

Impacted: state that is impacted by actions from other sources.

So We will be Looking These Angular-NGRX  features and Learn as we go on.
1. Introduction to angular NGRX State Managment -ngrx
2. Understand Redux Pattern Structure. When to use and not to use NGRX in the Application
3. How Store State,, Actions and Reducers will look like in NGRX Redux Pattern - Angular
4. Implement Counter Application without NGRX and using and using Input Output Emitters - NGRX
5. Implement the Counter Applicatioon using NGRX Store, Action and Reducers, Angular- NGRX
6. Refactoring Store state Using Asyn Pipre for Selecting Observables state data - Angular NGRX
7. Pass Custom Data using Props in Actions. Update State Datat in Reducer with Data - Angular NGRX
8. Disadvantages of not using crrate seletctors for selecting the store Data in the NGRX - Angular - NGRX
9. Using CreateFeatureSeletor and CreateSelector for getting the store data - Angular NGRX
10. Implement Routing for the State Mangment NGRX Appliacation - - Angular NGRX
11. Install Redux Chrome Extension and ngrx store dev tools for debugging Angular NGRX Application
12. Introduction for Combining all the Different Modules of teh state into single AppState - Angular NGRX
13. Implement the AppState in teh Angular NGRX Application by Combining all teh Fearure State
14. Get Async Data from ngrx store using create Selector and Display it in the Table
15. Create Reactive Form for Adding Post And Apply validation isung child routing - Angular ngrx\
16. Adding Posts into ngrx state submitted by the FOrm -  Angular NGRX
17. Props in NGEX Selector. Sending arguments to the state selectors for updating Post  - Angular
18. Update Post in NGRX store immutable with action in Angular NGRX
19. Delete Post in the NGRX stor state in Angular NGRX 
20. Implement LazyLoading for the routes in the NGRX Application
21. Lazy Load the ngrx state using for Feature store Module in Angular NGRX
22. Design Auth Login Module in NGRX Angular Application
23. NGRX Effects Library Introduction Manabge HTTP calls with Effects - Angular NGRX
24. How to Define the NGRX Effect in Angular NGRX Application
25. Adding Auth Features State for the Auth Module in teh Angular NGRX Application
26. Implement first Effects file in  our Angular Application
27. Save the User Token data from Login in NGRX State in Angular NGRX Application
28. Implement Shared Loading Spinner Componenet in the NGRX Shared Module
29. Implement Error Handling in ngrx Effects and Show Error Meessage when API Fails - Angular NGRX
30. Navigating the page using routes with Effects after login Success in ANgular NGRX Application
31. Create Signup Form and Ngrx actions in the angular ngrx application
32. Add Signup Effects to make API Call and save the user token in the ngrx state- Angular NGRX
33. Implement auto Login Functionality in the NGRX Angular Application
34. Implement  Logout Functionality in the NGRX Angular Application
35. Get Posts Data from backend HTTP API call using Effects in NGRX Angular 
36. Adding Post Data by making Http API Call by using Effects in NGRX Angular
37. Update and Delete Posts Data with NGRX State Managment in teh Angular
38. Implement auth User token for http API Calls using HTTP Interceptors in Angular
39. Access ngrx State in CanActivate Route Guard for Protecting routes in Angular
40. Fixing the Logout Bug to prevent multiple HTTP API Calls in the NGRX Angular
41. Introduction to NGRX Router Store. Install Router Store for Dispatching Route Actions in Angular
42. Implement Custom Serializer in NgRx Router to store only minimal Data in Router
43. Use Router State Params in the Selectors to get Simple Post Data in Ngrx Angular Application
44. Using Ngrx Router Store in teh Effects to get the posts datat in Ngrx Angular Application
45. Introduction to Ngrx Entity, Entity Adapters and Entity State, How to use in Angular NGRX APP
46. Implement CRUD Operations for Posts with NGRX Entity Adapter methods in Angular NGRX
47. NGRX Entity Selector Adaptor Methods like Select All, Select Entities in Ngrx Angular Application 
48. Remove unwanted Http API Calls i Data is Already Present in Ngrx Store - NGRX Application
49. Ngrx Entity Configuration Sort Compare - NGRX 
50. Introduction to NGRX Data. Simpify entity Store, effects and actions using NGRX Data - Angular