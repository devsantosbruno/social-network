import {
  FlatList,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';

import { Image, InputGroup, Publication, Typography } from '@components';

import { COLORS, METRICS } from '@themes';
import { PlusIcon, SearchIcon } from 'lucide-react-native';
import { friends, user } from 'src/utils/mockData';
import { styles } from './styles';

export default function Home() {
  const handleCreateNewStory = () => {};

  const { name, image } = user;

  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView>
        <View style={[styles.container, styles.head]}>
          <View style={styles.name}>
            <Typography variant='bodyThin' style={styles.textWhite}>
              Hi,
            </Typography>
            <Typography variant='heading02Bold' style={styles.textWhite}>
              {name}!
            </Typography>
          </View>

          <Image size={80} source={image} borderSize={1} circle />
        </View>

        <View style={styles.container}>
          <InputGroup
            placeholder='Search friend'
            icon={
              <SearchIcon
                color={COLORS.NEUTRAL.WHITE}
                size={METRICS.ICON.SMALL}
              />
            }
          />
        </View>

        <View style={styles.stories}>
          <FlatList
            data={friends}
            horizontal
            showsHorizontalScrollIndicator={false}
            ListHeaderComponent={
              <TouchableOpacity
                style={styles.createStory}
                onPress={handleCreateNewStory}
              >
                <PlusIcon color={COLORS.SECONDARY} size={METRICS.ICON.MEDIUM} />
              </TouchableOpacity>
            }
            renderItem={() => (
              <View style={styles.story}>
                <Image size={80} source={user.image} borderSize={1} circle />
              </View>
            )}
          />
        </View>

        <View style={styles.container}>
          <Typography variant='heading' style={styles.textWhite}>
            Posts
          </Typography>

          <View style={styles.posts}>
            {user.posts.map((item) => (
              <Publication
                key={item.id}
                user={item.user}
                title={item.title}
                description={item.description}
                date={item.date}
                engagements={item.engagements}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
