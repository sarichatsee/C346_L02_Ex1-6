import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, ScrollView } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";

// Movie component definition
const Movie = ({ title, year, poster }) => {
    return (
        <View>
            <Image source={poster} />
            <Text>
                {title} {year}
            </Text>
        </View>
    );
};

// AllMovies component definition
const AllMovies = () => {
    return (
        <View>
            <Movie
                title="Doctor Sleep"
                year="2019"
                poster={require('./assets/doctor-sleep.jpg')} // Path to the image
            />
            <Text>
                <Icon name="person-rifle" size={20} color="red" />
            </Text>
            <Movie
                title="Midway"
                year="2020"
                poster={require('./assets/midway.jpg')} // Path to the image
            />
        </View>
    );
};

// Main App component
const App = () => {
    return (
        <ScrollView>
            <AllMovies />
            <StatusBar style="auto" />
        </ScrollView>
    );
};

export default App;
