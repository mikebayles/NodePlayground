import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#e7e7e7',
        padding: 20,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20
    },
    label: {
        fontSize: 20,
        fontWeight: '300'
    }
});

class TaskRow extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.label}>{this.props.todo.task}</Text>
            </View>

        );
    }
}

TaskRow.propTypes = {
    todo: PropTypes.shape({
        task: PropTypes.string.isRequired
    })
};

export default TaskRow;