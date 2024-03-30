import React from 'react';
import { Component } from "react";
import { Modal, View, Text, Button, StyleSheet, TextInput } from 'react-native';


interface SettingsModalProps {
    isVisible: boolean;
    onClose: () => void;
}
interface SettingsModalState {
    server: {
        url: string,
        port: string,
    }
    worldDimensions: {
        width: string;
        height: string;
    },
}


export default class SettingsModal extends Component<SettingsModalProps, SettingsModalState> {
    constructor(public props: SettingsModalProps) {
        super(props);
        this.props = props;
        this.state = {
            server: {
                url: 'localhost',
                port: "7598",
            },
            worldDimensions: {
                width: "1024",
                height: "1024",
            },
        };
    }

    render() {
        return (
            <Modal
                animationType="fade"
                transparent={ true }
                onRequestClose={ this.props.onClose }
                visible={ this.props.isVisible }
            >
                <View style={styles.backdrop}>
                    <View style={ styles.modalInner }>
                        <Text style={ styles.textLabel }>Server URL</Text>
                        <TextInput
                            style={ styles.textInput }
                            onChangeText={ (url) => this.setState({ server: { ...this.state.server, url } }) }
                            value={this.state.server.url}
                            placeholder="Server URL"
                        />
                        <Text style={ styles.textLabel }>Server Port</Text>
                        <TextInput
                            style={ styles.textInput }
                            onChangeText={ (port) => this.setState({ server: { ...this.state.server, port } }) }
                            value={ this.state.server.port }
                            placeholder="Server Port"
                            keyboardType="numeric"
                        />
                        <Text style={ styles.textLabel }>World Width</Text>
                        <TextInput
                            style={ styles.textInput }
                            onChangeText={ (width) => this.setState({ worldDimensions: { ...this.state.worldDimensions, width } }) }
                            value={ this.state.worldDimensions.width }
                            placeholder="World Width"
                            keyboardType="numeric"
                        />
                        <Text style={ styles.textLabel }>World Height</Text>
                        <TextInput
                            style={ styles.textInput }
                            onChangeText={ (height) => this.setState({ worldDimensions: { ...this.state.worldDimensions, height } }) }
                            value={ this.state.worldDimensions.height }
                            placeholder="World Height"
                            keyboardType="numeric"
                        />
                        <Button title="Close" onPress={ this.props.onClose }/>
                    </View>
                </View>
            </Modal>
        );
    }
};


const styles = StyleSheet.create({
    modalInner: {
        top: 40,
        left: "25%",
        width: "50%",
        backgroundColor: "white",
        position: "absolute",
        padding: 15,
        borderRadius: 5,
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
    },
    textLabel: {
        alignSelf: 'flex-start',
        marginVertical: 5,
        fontSize: 16,
    },
    textInput: {
        width: '100%',
        padding: 10,
        marginVertical: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
    backdrop: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black
        justifyContent: 'center',
        alignItems: 'center',
    },
});
