export class NavigationPage{

            headerMenu(){
                cy.xpath('//button[@data-testid="categories_menu_button"]').click();
                cy.xpath('//button[@data-testid="Account Button"]').click();
            }



}

export const onNavigationPage = new NavigationPage()