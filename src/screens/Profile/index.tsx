import { SafeAreaView, ScrollView, TouchableOpacity, View } from 'react-native';

import { Image, Publication, Typography } from '@components';

import { user } from 'src/utils/mockData';
import { styles } from './styles';

export default function Profile() {
  const handlePortfolioRedirect = () => {};

  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView>
        <View style={styles.head}>
          <Typography variant='heading02Thin' style={styles.user}>
            {user.user}
          </Typography>

          <View style={styles.imageAndStatistics}>
            <Image size={120} source={user.image} borderSize={5} />

            <View style={styles.statistics}>
              <View>
                <Typography variant='heading' style={styles.textWhite}>
                  {user.statistics.followers}
                </Typography>
                <Typography variant='bodyThin' style={styles.textWhite}>
                  followers
                </Typography>
              </View>

              <View>
                <Typography variant='heading' style={styles.textWhite}>
                  {user.statistics.posts}
                </Typography>
                <Typography variant='bodyThin' style={styles.textWhite}>
                  posts
                </Typography>
              </View>
            </View>
          </View>

          <View style={styles.nameAndJob}>
            <Typography variant='heading02Regular' style={styles.textWhite}>
              {user.name}
            </Typography>
            <Typography variant='bodyThin' style={styles.textWhite}>
              {user.job}
            </Typography>
          </View>

          <View style={styles.portfolioContainer}>
            <TouchableOpacity onPress={handlePortfolioRedirect}>
              <Typography
                variant='bodyRegularUnderline'
                style={styles.textSecondary}
              >
                {user.link.title}
              </Typography>
            </TouchableOpacity>
          </View>
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
