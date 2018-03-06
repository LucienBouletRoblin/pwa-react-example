import React from 'react';
import PropTypes from 'prop-types';
import TicketNewsFeedCard from '../TicketNewsFeedCard';
import ServiceNewsFeedCard from '../ServiceNewsFeedCard';

class ListNewsFeed extends React.Component {
  render() {
    const { feeds } = this.props;
    return feeds
      ? feeds.map(feed => {
          return feed.type === 'ticket' ? (
            <TicketNewsFeedCard key={feed.key} ticket={feed} />
          ) : (
            <ServiceNewsFeedCard key={feed.key} service={feed} />
          );
        })
      : null;
  }
}

ListNewsFeed.propTypes = {
  tickets: PropTypes.array
};

export default ListNewsFeed;
