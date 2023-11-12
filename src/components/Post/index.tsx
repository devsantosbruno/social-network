import { View } from 'react-native';

import { Divider, Image, Interaction, Typography } from '@components';
import { User } from '@interfaces';
import { COLORS, METRICS } from '@themes';
import { HeartIcon, MessageSquareIcon, Repeat2Icon } from 'lucide-react-native';

import { styles } from './styles';

type PostProps = {
  user: User;
  title: string;
  description: string;
  date: string;
  engagements: {
    likes: number;
    comments: number;
    shares: number;
  };
};

const ICON_SIZE = METRICS.ICON.SMALL;
const ICON_COLOR = COLORS.SECONDARY;

export function Post({
  user,
  title,
  description,
  date,
  engagements,
}: PostProps) {
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Image size={60} source={user.image} borderSize={1} />

        <View>
          <Typography variant='bodyRegular' style={styles.textWhite}>
            {user.name}
          </Typography>
          <Typography variant='captionThin' style={styles.textWhite}>
            {user.user}
          </Typography>
        </View>
      </View>

      <View style={{ flex: 1 }}>
        <Typography variant='bodyBold' style={styles.textWhite}>
          {title}
        </Typography>
        <Typography variant='captionRegular' style={styles.description}>
          {description}
        </Typography>
      </View>

      <Typography variant='captionThin' style={styles.dateAndTime}>
        {date}
      </Typography>

      <Divider />

      <View style={styles.interactions}>
        <Interaction
          quantity={engagements.likes}
          icon={<HeartIcon color={ICON_COLOR} size={ICON_SIZE} />}
        />
        <Interaction
          quantity={engagements.comments}
          icon={<MessageSquareIcon color={ICON_COLOR} size={ICON_SIZE} />}
        />
        <Interaction
          quantity={engagements.shares}
          icon={<Repeat2Icon color={ICON_COLOR} size={ICON_SIZE} />}
        />
      </View>
    </View>
  );
}
