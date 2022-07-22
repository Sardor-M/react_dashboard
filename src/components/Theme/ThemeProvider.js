import React, { Children } from 'react';
import PropTypes  from 'react';
import { Provider } from './Theme';


export class ThemeProvider extends React.Component {
    static PropTypes = {
        children: PropTypes.string,
        initialStyle: PropTypes.string,
        initialColor: PropTypes.string,
    };

    constructor (props) {
        super(props);

        this.state ={
            style: "light",
            color:"primary",
        };
    }
    componentDidMount() {
        const {initialStyle, initialColor} = this.props;

        if (initialStyle) {
            this.setState({style: intialStyle});
        }
        if (initialColor) {
            this.setState({color: initialColor});
        }
    }
    onChangeTheme(themeState) {
        this.setState(themeState);
    }
    render () {
        const {children} = this.props;

        return (
            <Provider 
                value={{...this, onChangeTheme:this.onChangeTheme.bind(this)
            }}>
                {children}
            </Provider>
        );
    }
}
