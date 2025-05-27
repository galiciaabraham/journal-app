import { Text } from 'react-native';

//A welcome message component.
export default function Welcome() {
    return (
            <Text style={{
                padding: 10,
                fontSize: 20,
                margin: 5,
                color: '#272727',
                textAlign: 'center',

            }
            }>Welcome to your Journal...</Text>
    )
}