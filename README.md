# RecipeBox

## Planned features:

Basic:

-   Login using your Google account
-   Manually upload recipes
-   Organize your recipes into collections
-   Add tags to your recipes to help with organization
-   Add recipes to your weekly meal plan

Intermediate:

-   Import new recipes using a camera, photo, and/or url
-   See when the last time a recipe appeared on the meal plan was
-   Toggle between light and dark mode
-   Create secondary meal plans for trips, parties, etc.

Stretch:

-   Invite others to suggest recipes for a meal plan
-   See an automatically generated shopping list based on the meals on your meal plan
-   See suggested recipes from your recipes
-   Allow users to add/delete rows on the meal plan
-   Click on a recipe and have access to a timer and step-by-step instructions
-   Have items in the shopping list categorized by location in store

## Tech

-   React
-   Typescript
-   Redux Toolkit
-   Vitest
-   React Testing Library
-   TailwindCSS
-   Auth0
-   react-icons
-   react-router-dom
-   react-loading-skeleton
-   redux-logger
-   dotenv

## Colors

Made with the Material Theme Builder Figma plugin from Google

-   Background: #fff8f1
-   Primary: #765b00
-   Secondary: #6a5d3f
-   Error: #ba1a1a

## Learned:

<strong>8/1/23</strong> -- Remembered how to type events and how to set a controlled form in TS. Figured out how to do it with reusable components too!

<strong>7/31/23</strong> -- Fixed a TS error on the RecipeCard component:

    Element implicitly has an 'any' type because expression of type 'string' can't be used to index type '{}'. No index signature with a parameter of type 'string' was found on type '{}'.

To fix, I went into the slice for that component and other places were I had told TS that certain variables were of a type `object`. I learned that `object` is too vague and to set up another interface/type to tell it exactly what it should expect.

<strong>7/28/23</strong> -- Learned how to connect to MongoDB using Mongoose on the backend and how to create Schemas. Wrote some routes based on those Schemas and confirmed they were working using Postman; now just need to connect to a form on the frontend.

<strong>7/25/23</strong> -- Figured out how to use Vitest / React Testing Library to test basic functions and components.

    import {describe, expect, it} from "vitest"
    import {functionName} from "where it's located"

    describe("functionName, () => {
        it("should do something and return this", () => {
            expect(functionName()).toEqual(expected outcome)
        })
    })

There are lots of different matchers to use besides `.toEqual`; look on Jest's docs for a list of all of them.
