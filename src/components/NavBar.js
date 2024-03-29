import React, {Component} from 'react';
import PropTypes from 'prop-types';
import NavButton from './NavButton';

class NavBar extends Component {
    static propTypes = {
        children: PropTypes.instanceOf(Array).isRequired,
    }

    constructor(props) {
        super(props);

        // Sets initial state so the first tab is active initially
        this.state = {
            activeTab: this.props.children[0].props.label,
        };
    }

    // Update the app state to the tab just clicked by the user
    onClickTabItem = (tab) => {
        this.setState({ activeTab: tab });
    }

    // Keep track of which tab is active and display a list of tabs with the content of the
    // current active tab
    render() {
        const {
            onClickTabItem,
            props: { children},
            state: { activeTab },
        } = this;

        return (
            <div className="tabs">
                <ol className="tab-list">
                    {children.map((child) => {
                        const { label } = child.props;

                        return (
                            <NavButton
                                activeTab={activeTab}
                                key={label}
                                label={label}
                                onClick={onClickTabItem}
                            />
                        );
                    })}
                </ol>

                <div className="tab-content">
                    {children.map((child) => {
                        if (child.props.label !== activeTab) return undefined;
                        return child.props.children
                    })}
                </div>
            </div>
        )
    }
}

export default NavBar