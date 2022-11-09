import MainFrame from "./MainFrame";

import { render } from "@testing-library/react";

/**
 * @group unit/app/components/mainframe
 */
describe('@sage/bnkc-connector-component-mainframe.component', () => {
    describe('render', () => {
        it('should render component without error', () => {
            render(<MainFrame />);
        });

        it('should render children', () => {
            const { getByText } = render(
                <MainFrame>
                    <div id={"child1"}>
                        <p>test text</p>
                    </div>
                </MainFrame>
            );

            expect(getByText('test text')).toBeInTheDocument()
        });

        describe('snapshot', () => {
            it('should match snapshot', () => {
                const { asFragment } = render(<MainFrame />);

                expect(asFragment()).toMatchSnapshot();
            });
        });
    });
})
