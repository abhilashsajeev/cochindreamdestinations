'use client';
import { Text, Container, ActionIcon, Group, rem, Image as MImage } from '@mantine/core';
import Image from 'next/image';

import classes from './FooterLinks.module.css';

import ListLinks from './ListLinks';
import Link from 'next/link';

const data = [
  {
    title: 'Kerala Cabs',
    links: [
      { label: 'Home', link: '/' },
      { label: 'Taxi Rentals', link: '/rentals' },
      { label: 'Sabarimala', link: '/sabarimala' },
      { label: 'Gallery', link: '/gallery' },
    ],
  },
  {
    title: 'Kerala Traveller',
    links: [
      { label: 'Traveller', link: '/traveller' },
      { label: 'Urbania', link: '/urbania' },
      { label: 'Bus', link: '/bus' },
      { label: 'Taxi', link: '/taxi' },
    ],
  },
  {
    title: 'House Boat',
    links: [
      { label: 'House Boat booking', link: '/houseboat' },
      { label: 'Testimonials', link: '/testimonials' },
      { label: 'Places', link: '/places/kovalam' },
      { label: 'Contact us', link: '#' },
    ],
  },
];

export function FooterLinks() {
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Link
        key={index}
        
        className={classes.link}
        href={link.link}
        
      >
        {link.label}
      </Link>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>
          <strong> {group.title}</strong>
        </Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <Image
            src="https://res.cloudinary.com/dtgoc3cww/image/upload/f_auto,q_auto/v1/Logo/jcxqfemum1vr2gwyuhks"
            width={120}
            height={120}
            about="Cochin Dream Destinations Logo"
            alt="Cochin Dream Destinations Logo"
          />
          <Text size="xs" c="dimmed" className={classes.description}>
            Make your next trip memmorable and safe with us.
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
        <div className={classes.groups}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15729.999578272675!2d76.3187514!3d9.7236541!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b087b9c1c67e5d5%3A0xbdb32c01d9cd6ac6!2sCochin%20Dream%20Destinations!5e0!3m2!1sen!2sin!4v1728490749188!5m2!1sen!2sin"
            width="300"
            height="300"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            title='Google map location of Cochin Dream Destinations Office'
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text c="dimmed" size="sm">
          © 2024 cochindreamdestinations.in All rights reserved.
        </Text>

        <Group gap={3} className={classes.social} justify="flex-end" wrap="nowrap">
          <ActionIcon
            size="lg"
            color="gray"
            variant="subtle"
            component={Link}
            aria-label="Youtube"
            href="https://www.youtube.com/@ReelsOnwheels-he4vf"
            target="_blank"
          >
            <MImage
              width={32}
              height={32}
              fit="contain"
              alt="Youtube"
              src="https://res.cloudinary.com/dtgoc3cww/image/upload/f_auto,q_auto/v1/icons/youtube"
            />
          </ActionIcon>
          <ActionIcon
            size="lg"
            color="gray"
            variant="subtle"
            aria-label="Facebook"
            component={Link}
            href="https://www.facebook.com/people/Cochin-Dreamdestinations/pfbid0nR9jSFVQ8WvLTkz4YyWhfGVjyz3r6WwmVZUi16vFCs5FsC1dH6of4CNHBAHKVruLl/?mibextid=ZbWKwL"
            target="_blank"
          >
            <MImage
              width={32}
              height={32}
              fit="contain"
              alt="Facebook"
              src="https://res.cloudinary.com/dtgoc3cww/image/upload/f_auto,q_auto/v1/icons/facebook"
            />
          </ActionIcon>
          <ActionIcon
            size="lg"
            color="gray"
            variant="subtle"
            aria-label="Instagram"
            component={Link}
            href="https://www.instagram.com/cochindreamdestinations"
            target="_blank"
          >
            <MImage
              width={32}
              height={32}
              fit="contain"
              alt="Instagram"
              src="https://res.cloudinary.com/dtgoc3cww/image/upload/f_auto,q_auto/v1/icons/instagram"
            />
          </ActionIcon>

          <ActionIcon
            size="lg"
            variant="subtle"
            aria-label="Trip Advisor"
            component={Link}
            href="https://www.tripadvisor.in/Profile/dreamdestinationscoc"
            target="_blank"
          >
            <MImage
              width={32}
              height={32}
              fit="contain"
              alt="Tripadvisor"
              src="https://res.cloudinary.com/dtgoc3cww/image/upload/f_auto,q_auto/v1/icons/tripadvisor"
            />
          </ActionIcon>
          <ActionIcon
            size="lg"
            variant="subtle"
            aria-label="Pinterest"
            component={Link}
            href="https://in.pinterest.com/cdreamdestinations/"
            target="_blank"
          >
            <MImage
              width={32}
              height={32}
              fit="contain"
              alt="Pinterest"
              src="https://res.cloudinary.com/dtgoc3cww/image/upload/f_auto,q_auto/v1/icons/fq3p33arpcoppsqfkneq"
            />
          </ActionIcon>

        </Group>
      </Container>
      <Container>
        <ListLinks />
      </Container>
    </footer>
  );
}
