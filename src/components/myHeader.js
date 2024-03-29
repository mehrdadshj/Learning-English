import React, {Component} from 'react'
import {Header, Title, Left, Button, Icon, Body, Right} from "native-base";
import logo from "../assets/images/react.png";
import {Image} from "react-native";

class myHeader extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        const { navigation } = this.props;
        return (
            <Header androidStatusBarColor="#e65100" style={{backgroundColor: "#fb8c00", height: 60}}>
                <Left>
                    <Button transparent
                            onPress={this.props.onPress}
                    >
                        <Icon name={this.props.iconName}/>
                    </Button>
                </Left>
                <Body>
                    <Title>Learning english</Title>
                </Body>
                <Right>
                    <Image source={logo} style={{width: 70, height: 60}} resizeMode='stretch'>
                    </Image>

                </Right>

            </Header>
        );
    }
}

export default myHeader
