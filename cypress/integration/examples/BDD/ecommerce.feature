Feature: End to End Ecommerce validation

@Regression
Scenario: Ecommerce products delivery
Given I am on Ecommerce Page
When I login to the application
And I add items in the cart and checkout
And validate the total price limit
Then select the country submit and verify thankyou

@Smoke
Scenario: Ecommerce products delivery cucumber driven
Given I am on Ecommerce Page
When I login to the application with cucumber
| username           | password |
| rahulshettyacademy | learning |
And I add items in the cart and checkout
And validate the total price limit
Then select the country submit and verify thankyou

