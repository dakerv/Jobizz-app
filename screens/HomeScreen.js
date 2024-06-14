import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, FlatList, ScrollView } from 'react-native';
import filterImage from '../assets/filter.5.png'
import profilePicture from '../assets/profilePicture.png'
import searchIcon from '../assets/searchIcon.png'
import facebookLogo from '../assets/Images/facebook.png'
import gmailLogo from '../assets/Images/google logo.png'
import yellowElephant from '../assets/Hadoop Distributed File System.png'
import googleDrive from '../assets/Google Drive.png'
import googlePhotos from '../assets/Google Photos.png'
import sharePoint from '../assets/Microsoft Sharepoint 2019.png'
import appleLogo from '../assets/Images/apple logo.png'
import snapChat from '../assets/Snapchat Circled Logo.png'
import burgerKing from '../assets/burgerking.png'
import beats from '../assets/Beats.png'
import popularFacebook from '../assets/popular facebook.png'


export default function HomeScreen ({route}) {
  const [job, setJob] = useState ('');
  const {name, email} = route.params;

  const featuredJobs = [
    {key: '1', title: 'Software Engineer', company: 'Facebook', image: facebookLogo, backStyle: styles.jobBox1, salary: '$180,000', location: 'Accra,Ghana'},
    {key: '2', title: 'Google Analsyt', company: 'Google', image: gmailLogo, backStyle: styles.jobBox2, salary: '$180,000', location: 'Accra,Ghana' },
    {key: '3', title: 'Database Administrator', company: 'Microsoft', image: yellowElephant, backStyle: styles.jobBox3, salary: '$50,000', location: 'Accra,Ghana'},
    {key: '4', title: 'AI Engineer', company: 'Meta AI', image: googleDrive ,backStyle: styles.jobBox4, salary: '$880,000', location: 'Accra,Ghana'},
    {key: '5', title: 'Computer Administrator', company: 'Alibaba', image: googlePhotos, backStyle: styles.jobBox5, salary: '$280,000', location: 'Accra,Ghana'},
    {key: '6', title: 'Service Personnel', company: 'Shein', image: sharePoint, backStyle: styles.jobBox6, salary: '$10,000', location: 'Accra,Ghana'},
    {key: '7', title: 'Network Analyst', company: 'AliExpress', image: appleLogo, backStyle: styles.jobBox7, salary: '$5,000', location: 'Accra,Ghana'},
    {key: '8', title: 'Systems Administrator', company: 'Jumia', image: snapChat, backStyle: styles.jobBox8, salary: '$120,000', location: 'Accra,Ghana'}
  ]

  const popularJobs = [
    {key: '1', title: 'Jr Executive', company2: 'Burger King', salary2: '$60,000/y', location: 'Los Angeles, US', image: burgerKing},
    {key: '2', title: 'Product Manager', company2: 'Beats', salary2: '$84,000/y', location: 'Los Angeles, US', image: beats},
    {key: '3', title: 'Colonizer', company2: 'Microsoft', salary2: '$50,000', location: 'Los Angeles, US', image: popularFacebook},
    {key: '4', title: 'AI Engineer', company2: 'Meta AI', salary2: '$880,000', location: 'Los Angeles, US', image: burgerKing},
    {key: '5', title: 'Computer Admin', company2: 'Alibaba', salary2: '$280,000', location: 'Los Angeles, US', image: beats},
    {key: '6', title: 'Service Personnel', company2: 'Shein', salary2: '$10,000', location: 'Los Angeles, US', image: popularFacebook},
    {key: '7', title: 'Network Analyst', company2: 'AliExpress', salary2: '$5,000', location: 'Los Angeles, US', image: burgerKing},
    {key: '8', title: 'Systems Admin', company2: 'Jumia', salary2: '$120,000', location: 'Los Angeles, US', image: beats}
  ]

  const renderFeaturedJobs = ({ item }) => (
    <View style={item.backStyle}>
      <View style={styles.imagesFormat}> 
      <Image source={item.image}/>
      </View>
      
      <Text style={styles.featuredJobTexts}>{item.title} </Text>
      <Text style={styles.company}>{item.company} </Text>
      <Text style={styles.salaryStyle}>{item.salary} </Text>
      <Text style={styles.locationStyle}>{item.location}</Text>
    </View>
  );

  const renderPopularJobs = ({ item }) => (
    <View>
      <View style= {styles.popularJobsBoxes}>

      <Image source={item.image}
      style={styles.popularImages} />
      
      <Text style={styles.popularPositions}>{item.title}</Text>
      <Text style={styles.popularCompanies}> {item.company2} </Text>
      <Text style={styles.popularSalaries}> {item.salary2} </Text>
      <Text style={styles.popularLocations}> {item.location} </Text>
      </View>

    </View>
  );

  return ( 

    <View style={styles.container}>
    

      <View style={styles.textContainer}> 
      <Text style={styles.nameStyle}> {name} </Text>
      <Text style={styles.emailStyle}> {email} </Text>
      </View>

      <View style={styles.redDotBg}>
        <View style={styles.redDot}></View>

      </View>

      <Image source={profilePicture}
      style={styles.profilePictureProperties}/>
      
      

      <TextInput style={styles.jobSearch}
      placeholder= 'Search a job or position'
      value={job}
      onChangeText={setJob}> 
      </TextInput>

      <Image source={searchIcon} 
      style={styles.searchIconProperties}/>

      <View style={styles.iconContainer}>
        <Image source= {filterImage}
        style={styles.filterProperties} />
      </View>

      <Text style={styles.featuredJobs}> Featured Jobs </Text>
      <Text style={styles.seeAll}> See all </Text>

      <View>
        <FlatList
          data={featuredJobs}
          renderItem={renderFeaturedJobs}
          horizontal={true}
          keyExtractor={item => item.key}>
        </FlatList>
      </View>

      <Text style={styles.featuredJobs}> Popular Jobs </Text>
      <Text style={styles.seeAll}> See all </Text>

      <View style={styles.popularJobsContainer}>
        <FlatList
        data={popularJobs}
        renderItem={renderPopularJobs}
        keyExtractor={item => item.key}>
        </FlatList>  
      </View>

   
    </View>
  )
}

const styles = StyleSheet.create ({
  container: {
    backgroundColor: "#FAFAFD",
    flex: 1,
    padding: 18,
  },

  textContainer: {
    width: 254,
    height: 55,
    top: 50,
    left: 5,
  },

  nameStyle: {
    fontWeight: "700",
    fontSize: 24,
    color: "#0D0D26"
  },

  emailStyle: {
    fontWeight: "400",
    fontSize: 20,
    color: "#95969D"
  },

  jobSearch: {
    width: 263,
    height: 48,
    borderRadius: 12,
    backgroundColor: "#F2F2F3",
    top: 50,
    left: 9,
    paddingLeft: 40
  },

  iconContainer: {
    width: 48,
    height: 48,
    left: 287,
    top: -16,
    borderRadius: 12,
    backgroundColor: "#F2F2F3",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },

  profilePictureProperties: {
   left: 285,
   top: -18,
  },

  searchIconProperties: {
    top: 15,
    left: 20,
  },

  featuredJobs: {
    width: 114,
    height: 21,
    fontWeight: "600",
    fontSize: 16,
    color: "#0D0D26",
    top: 27,
    left: 8
  },

  seeAll: {
    width: 44,
    height: 21,
    fontWeight: "400",
    fontSize: 14,
    color: "#95969D",
    left: 285,
    top: 7
  },

  featuredJobTexts: {
    width: 300,
    height: 21,
    fontWeight: '600',
    fontSize: 16,
    color: "white",
    textAlign: "left",
    left: 80,
    top: -22
  },

  company: {
    width: 300,
    height: 21,
    fontWeight: 400,
    fontSize: 14,
    color: "white",
    textAlign: "left",
    left: 80,
    top: -22
  },

  imagesFormat: {
    borderRadius: 12,
    backgroundColor: "white",
    width: 46,
    height: 46,
    left: 10,
    alignItems: "center",
    justifyContent: "center",
    top: 18,
    left: 20
  },

  jobBox1: {
    backgroundColor: "#5386E4",
    width: 280,
    height: 186,
    borderRadius: 24,
    opacity: 6,
    marginLeft: 10,
    marginTop: 30
  },

  jobBox2: {
    backgroundColor: "darkblue",
    width: 280,
    height: 186,
    borderRadius: 24,
    opacity: 6,
    marginLeft: 10,
    marginTop: 30
  },

  jobBox3: {
    backgroundColor: "plum",
    width: 280,
    height: 186,
    borderRadius: 24,
    opacity: 6,
    marginLeft: 10,
    marginTop: 30
  },

  jobBox4: {
    backgroundColor: "darkred",
    width: 280,
    height: 186,
    borderRadius: 24,
    opacity: 6,
    marginLeft: 10,
    marginTop: 30
  },

  jobBox5: {
    backgroundColor: "lightpink",
    width: 280,
    height: 186,
    borderRadius: 24,
    opacity: 6,
    marginLeft: 10,
    marginTop: 30
  },

  jobBox6: {
    backgroundColor: "brown",
    width: 280,
    height: 186,
    borderRadius: 24,
    opacity: 6,
    marginLeft: 10,
    marginTop: 30
  },

  jobBox7: {
    backgroundColor: "indigo",
    width: 280,
    height: 186,
    borderRadius: 24,
    opacity: 6,
    marginLeft: 10,
    marginTop: 30
  },

  jobBox8: {
    backgroundColor: "teal",
    width: 280,
    height: 186,
    borderRadius: 24,
    opacity: 6,
    marginLeft: 10,
    marginTop: 30
  },

  salaryStyle: {
    width: 70,
    height: 24,
    fontWeight: "500",
    fontSize: 15,
    color: "white",
    top: 64,
    left: 22
  },

  locationStyle: {
    width: 102,
    height: 24,
    fontWeight: "500",
    fontSize: 15,
    color: "white",
    top: 40,
    left: 170
  },

  popularJobsContainer: {
    height: 240,
    marginTop: 20,
  },

  popularJobsBoxes: {
    width: 327,
    height: 74,
    borderRadius: 20,
    backgroundColor: "white",
    marginVertical: 18
  },

  popularPositions: {
    fontWeight: "600",
    fontSize: 14,
    color: "#0D0D26",
    left: 69,
    top: -20

  },

  popularCompanies: {
    fontWeight: "400",
    fontSize: 13,
    color: "grey",
    left: 66,
    top: -20
  },

  popularImages: {
    top: 17,
    left: 17
  },

  popularLocations: {
    fontWeight: "400",
    fontSize: 13,
    color: "grey",
    left: 220,
    top: -50
  },

  popularSalaries: {
    fontWeight: "600",
    fontSize: 14,
    color: "#0D0D26",
    left: 245,
    top: -50
  },

  redDotBg: {
    backgroundColor: "#FAFAFD",
    width: 16,
    height: 16,
    borderRadius: 25,
    left: 326,
    top: -3,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1

  },

  redDot: {
  width: 8,
  height: 8,
  backgroundColor: "red",
  borderRadius: 25
  }

})