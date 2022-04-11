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

