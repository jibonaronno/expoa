import React from 'react';
import { Link, useNavigation, useRouter } from 'expo-router';
import styles from "../../src/components/styles";
import { SafeAreaView, StyleSheet, View, Text, Button } from 'react-native';


/* npx expo install react-native-svg */
import Svg, { Path } from "react-native-svg"
import { TouchableOpacity } from 'react-native-gesture-handler';
/* Resizing of SVG idea came from https://www.sarasoueidan.com/blog/svg-coordinate-systems/ */
/* Saved in documentsA/reactA/Understanding SVG Coordinate Systems Sara Soueidan, inclusive design engineer.pdf */
//import Deadlift from "../assets/images/deadlift.svg"

export default function worktypes() {

    const Header = () => {
        return (
            <View style={stylesA.header}>
                <Text> Select Excersize Type </Text>
            </View>
        );
    }

    const Deadlift = () => {
        return (
            <Svg width="100%" height="90%" preserveAspectRatio="xMinYMin" viewBox="-5 0 150 200">
                        <Path d="M127.565 107.6C121.887 107.6 116.11 107.6 110.433 107.6C109.038 107.6 108.54 107.2 108.54 105.8C108.042 91.2 107.544 76.4999 110.831 62.0999C110.931 61.4999 111.628 60.6 110.333 60.4C109.238 60.2 109.337 60.9999 109.238 61.5999C107.843 66.8999 107.246 72.4 106.847 77.8C106.05 87.9 106.449 98.0999 106.947 108.2C107.046 109.4 107.146 110.7 106.748 111.9C105.851 114.6 103.062 116.4 100.174 116.1C97.3849 115.8 94.8948 113.6 94.6956 110.6C93.7991 93.1999 93.2015 75.9 97.1857 58.8C98.1817 54.6 99.6758 50.5 102.066 46.9C105.154 42.2 109.238 39.5999 115.114 39.6999C123.68 39.8999 132.346 39.8999 140.912 39.6999C146.589 39.5999 150.573 42.0999 153.561 46.5999C157.047 51.8999 158.641 57.8999 159.737 64.0999C162.326 79.3999 162.027 94.6999 161.231 110.1C161.031 113.8 158.243 116.3 154.756 116.2C151.27 116.1 148.681 113.4 148.78 109.6C148.979 101.5 149.577 93.2999 149.179 85.1999C148.88 77.7999 148.481 70.3999 146.788 63.1999C146.689 62.7999 146.689 62.4 146.489 62C146.191 61.4 146.489 60.1 145.095 60.5C143.8 60.9 144.597 61.7 144.796 62.3C145.892 67.2 146.589 72.0999 146.888 77.0999C147.585 86.3999 147.286 95.7 147.087 105C147.087 107.3 146.191 107.7 144.198 107.6C138.521 107.6 133.043 107.6 127.565 107.6Z" fill="#593"/>
                        <Path d="M153.86 155.6C154.258 163.3 154.557 169.6 154.856 175.9C155.055 180.4 152.565 184.2 148.581 185.6C144.696 187 140.413 185.8 137.824 182.6C136.33 180.8 135.732 178.7 135.633 176.4C135.135 164.3 134.836 152.1 133.939 140C133.342 131.6 132.047 123.3 131.051 115C130.951 114.2 130.652 113.8 129.656 113.7C124.875 113.2 124.676 113.3 123.979 118C121.588 133 120.792 148.2 120.194 163.4C119.995 167.8 119.895 172.2 119.596 176.6C119.298 182.8 115.015 186.4 108.64 186.1C103.859 185.8 100.174 181.2 100.373 175.7C100.971 162.8 101.469 149.8 102.265 136.9C102.664 130.7 103.759 124.5 104.556 118.4C104.656 117.9 104.457 117.2 105.054 116.8C107.246 115.2 108.441 113 108.64 110.3C108.74 109.2 109.437 109.4 110.034 109.4C121.688 109.4 133.342 109.4 145.095 109.4C146.191 109.4 146.489 109.7 146.589 110.8C146.788 113 147.685 115 149.577 116.3C150.872 117.2 150.673 118.5 150.872 119.6C152.665 132 153.661 144.5 153.86 155.6Z" fill="#593A2D"/>
                        <Path d="M43.4 82.6999C44.4956 80.8999 45.9897 80.4 47.7825 81C49.675 81.6 50.0734 83.2 50.0734 85C50.0734 92.3 50.173 99.6 49.9738 106.9C49.9738 109 50.5714 109.3 52.4639 109.3C64.7151 109.2 76.9663 109.3 89.2175 109.2C91.5084 109.2 93.1021 109.4 92.9029 112.2C92.9029 112.6 93.1021 113 93.3013 113.4C92.4049 113.9 91.5084 113.7 90.7116 113.7C77.8627 113.7 65.0139 113.7 52.165 113.7C50.4718 113.7 49.9738 114 49.9738 115.8C50.0734 123.2 49.9738 130.6 50.0734 138C50.0734 139.8 49.7746 141.4 47.8821 142C46.0892 142.5 44.4956 142.2 43.4996 140.4C41.0095 142.8 40.4119 142.9 37.3242 140.9C36.4277 140.3 36.3281 141 36.0293 141.3C34.7345 142.4 33.34 142.5 31.846 141.8C30.4515 141.2 30.1527 139.9 30.1527 138.5C30.1527 133.8 30.0531 129 30.1527 124.3C30.2523 122.5 29.5551 122.1 27.9614 122.2C24.7741 122.3 24.7741 122.2 24.7741 118.9C24.7741 113.8 24.7741 113.8 19.6943 113.8C14.017 113.8 8.23994 113.7 2.56254 113.9C0.570476 114 0.769695 112.9 0.769695 111.6C0.769695 110.2 0.769719 109.3 2.66218 109.4C9.33561 109.5 16.1086 109.4 22.782 109.5C24.3757 109.5 25.1725 109.2 24.8737 107.5C24.7741 106.9 24.8737 106.3 24.8737 105.8C24.8737 104.4 24.4753 102.7 25.073 101.6C25.7702 100.3 27.6626 101.1 28.9575 101.1C30.4515 101 30.2523 100.2 30.2523 99.3C30.2523 94.6 30.2523 89.7999 30.2523 85.0999C30.2523 83.4999 30.4515 82.1 32.1448 81.4C33.6388 80.8 35.1329 80.9999 36.2285 82.1999C36.7265 82.7999 36.9258 82.7 37.5234 82.3C39.8143 80.2 40.9099 80.3999 43.4 82.6999Z" fill="#593A2D"/>
                        <Path d="M161.928 113.8C163.024 109.4 163.024 109.4 167.406 109.4C179.06 109.4 190.714 109.3 202.467 109.5C204.957 109.5 205.355 108.8 205.355 106.5C205.156 99.4 205.355 92.1999 205.256 85.0999C205.256 83.2999 205.754 81.6999 207.646 81.1999C209.439 80.6999 210.933 81.2 211.929 82.9C214.618 80.5 215.316 80.4 218.105 82.3C218.901 82.9 219.001 82.4 219.399 82C220.595 80.9 221.989 80.7 223.483 81.4C224.977 82.1 225.276 83.4 225.276 84.9C225.276 89.6 225.376 94.2 225.276 98.9C225.276 100.7 225.774 101.4 227.467 101.1C229.957 100.7 230.854 101.5 230.754 104.2C230.555 109.5 230.655 109.5 236.133 109.5C241.711 109.5 247.189 109.6 252.767 109.5C254.759 109.4 254.759 110.4 254.858 111.9C254.858 113.4 254.659 114.1 252.866 114C246.193 113.9 239.42 114 232.746 113.9C231.053 113.9 230.555 114.4 230.754 116C230.854 116.7 230.754 117.3 230.754 118C230.754 119.4 231.153 121.1 230.455 122.1C229.758 123.1 227.965 122.4 226.67 122.4C225.176 122.4 225.376 123.3 225.376 124.2C225.376 128.8 225.376 133.3 225.376 137.9C225.376 139.5 225.475 141.2 223.782 142C222.188 142.8 220.595 142.7 219.3 141.2C218.802 140.6 218.503 140.7 218.204 141.2C218.105 141.3 218.005 141.5 217.905 141.6C215.714 143.1 213.921 142.5 212.228 140.7C210.734 142.4 208.941 143.1 206.949 141.9C205.555 141.1 205.555 139.6 205.555 138.1C205.555 130.9 205.455 123.6 205.654 116.4C205.654 114.2 205.056 113.9 203.064 113.9C190.415 114 177.765 113.9 165.016 113.9C163.821 113.8 162.924 113.8 161.928 113.8Z" fill="#593A2D"/>
                        <Path d="M145.195 17.7C145.195 27.4 137.326 35.3 127.764 35.3C118.003 35.3 110.134 27.4 110.134 17.6C110.134 7.89998 118.003 0 127.565 0C137.326 0 145.195 7.89995 145.195 17.7Z" fill="#593A2D"/>
                    </Svg>
        );
    }

    const Benchpress = () => {
        return (
                <Svg width="100%" height="90%" viewBox="35 -20 150 200">
                <Path d="M119.473 92.1591C119.573 78.2591 129.343 68.159 142.602 68.259C155.762 68.359 166.13 78.759 166.13 91.759C166.031 104.659 155.363 115.159 142.303 114.959C129.143 114.959 119.373 105.159 119.473 92.1591Z" fill="#593A2D"/>
                <Path d="M131.935 115.059C124.757 115.059 117.579 115.059 110.401 115.059C104.718 115.059 98.9357 115.059 93.253 115.059C80.0932 114.959 70.7219 103.059 73.8124 90.259C74.0118 89.359 74.2112 88.6589 75.4075 88.3589C90.5612 84.7589 105.815 81.059 120.968 77.459C121.068 77.459 121.267 77.459 121.766 77.459C117.778 84.059 116.382 91.0589 118.476 98.3589C120.47 105.859 125.056 111.259 131.935 115.059Z" fill="#593A2D"/>
                <Path d="M153.369 115.059C165.333 109.059 173.109 92.759 163.738 77.259C167.925 78.259 171.913 79.2591 176 80.1591C187.266 82.8591 198.432 85.559 209.697 88.259C210.993 88.559 211.392 89.159 211.691 90.259C214.682 103.059 205.311 114.959 192.151 115.059C179.589 115.059 167.028 115.059 154.466 115.059C154.067 115.059 153.768 115.059 153.369 115.059Z" fill="#593A2D"/>
                <Path d="M74.61 86.559C77.9996 70.959 81.2896 55.659 84.6792 40.459C84.9783 39.059 84.5795 38.259 83.782 37.259C78.6975 31.059 79.4951 22.5589 85.4768 17.3589C91.1594 12.4589 100.032 13.059 105.017 18.559C110.5 24.559 109.603 34.4589 103.023 39.3589C101.627 40.4589 100.93 41.5589 100.63 43.3589C98.9356 55.5589 97.0414 67.6589 95.1472 79.8589C94.9478 81.0589 94.5491 81.7589 93.1533 82.059C87.0719 83.459 80.9905 85.059 74.61 86.559Z" fill="#593A2D"/>
                <Path d="M210.694 86.5589C204.413 85.0589 198.332 83.4589 192.251 82.1589C190.755 81.8589 190.356 81.1589 190.157 79.7589C188.362 67.6589 186.468 55.6589 184.773 43.5589C184.574 42.2589 184.175 41.4589 182.979 40.7589C177.097 37.0589 174.704 30.2589 176.997 23.8589C179.091 17.8589 185.172 13.9589 191.453 14.6589C198.432 15.3589 203.516 20.4589 204.314 27.4589C204.712 31.1589 203.616 34.4589 201.422 37.3589C200.625 38.3589 200.525 39.1589 200.725 40.4589C204.015 55.5589 207.305 70.6589 210.594 85.6589C210.694 85.8589 210.694 86.0589 210.694 86.5589Z" fill="#593A2D"/>
                <Path d="M248.18 32.8589C248.18 24.0589 248.08 15.2589 248.18 6.35895C248.18 1.35895 252.766 -1.44103 256.853 0.75897C259.246 2.05897 259.944 4.25895 259.944 6.85895C259.944 17.4589 259.944 27.959 259.944 38.559C259.944 45.459 259.944 52.4589 259.944 59.3589C259.944 63.0589 257.85 65.5589 254.76 65.8589C250.971 66.2589 248.279 63.659 248.18 59.559C248.08 52.059 248.18 44.659 248.18 37.159C248.18 35.759 248.18 34.2589 248.18 32.8589Z" fill="#593A2D"/>
                <Path d="M246.186 33.1591C246.186 41.8591 246.186 50.4591 246.186 59.1591C246.186 63.2591 243.893 65.859 240.204 65.859C236.715 65.859 234.422 63.2591 234.422 59.1591C234.422 42.3591 234.422 25.559 234.422 8.75904C234.422 7.65904 234.422 6.45901 234.521 5.35901C234.92 1.95901 237.413 -0.140975 240.603 0.0590254C243.793 0.259025 246.086 2.65903 246.086 6.05903C246.186 15.059 246.186 24.1591 246.186 33.1591Z" fill="#593A2D"/>
                <Path d="M37.2242 33.1589C37.2242 41.8589 37.2242 50.6589 37.2242 59.3589C37.2242 63.2589 34.9312 65.7589 31.5416 65.8589C28.5507 65.9589 26.158 63.9589 25.6596 61.0589C25.5599 60.2589 25.4602 59.4589 25.4602 58.5589C25.4602 41.5589 25.4602 24.4589 25.4602 7.45891C25.4602 6.35891 25.4602 5.15889 25.7593 4.05889C26.4571 1.45889 29.3483 -0.241113 32.0401 0.0588872C34.8315 0.358887 37.0248 2.6589 37.1245 5.7589C37.2242 11.1589 37.1245 16.6589 37.1245 22.0589C37.2242 25.7589 37.2242 29.4589 37.2242 33.1589Z" fill="#593A2D"/>
                <Path d="M39.2181 32.859C39.2181 23.859 39.2181 14.959 39.2181 5.959C39.2181 3.259 40.7136 1.359 43.1063 0.459004C45.3992 -0.340996 47.7919 0.25898 49.4868 2.05898C50.0849 2.75898 50.5834 3.459 50.6831 4.459C50.7828 6.159 51.0819 7.95902 51.0819 9.65902C51.0819 26.259 51.0819 42.859 51.0819 59.459C51.0819 63.359 48.6892 65.959 45.1999 65.959C41.7105 65.959 39.4175 63.359 39.4175 59.359C39.2181 50.459 39.2181 41.659 39.2181 32.859Z" fill="#593A2D"/>
                <Path d="M175.103 34.3589C153.17 34.3589 131.337 34.3589 109.503 34.3589C109.802 33.1589 110.102 31.9589 110.301 30.8589C110.5 29.5589 111.497 29.9589 112.195 29.9589C120.27 29.9589 128.346 29.9589 136.321 29.9589C147.986 29.9589 159.65 30.0589 171.314 29.8589C173.508 29.8589 174.604 30.3589 174.704 32.5589C174.804 33.1589 175.003 33.7589 175.103 34.3589Z" fill="#593A2D"/>
                <Path d="M261.938 32.8589C261.938 28.5589 261.938 24.259 261.938 19.959C261.938 17.559 263.533 15.959 265.626 15.959C267.62 16.059 269.116 17.659 269.116 19.959C269.116 28.659 269.116 37.259 269.116 45.959C269.116 48.459 267.62 49.8589 265.427 49.8589C263.234 49.7589 262.037 48.359 261.938 45.959C261.838 41.559 261.838 37.2589 261.938 32.8589Z" fill="#593A2D"/>
                <Path d="M23.566 33.0589C23.566 37.3589 23.566 41.6589 23.566 45.9589C23.566 48.4589 22.1702 49.9589 19.9769 49.9589C17.7836 49.9589 16.3879 48.4589 16.3879 45.9589C16.3879 37.4589 16.3879 28.9589 16.3879 20.4589C16.3879 17.8589 17.8833 16.1589 20.0766 16.1589C22.1702 16.1589 23.566 17.6589 23.566 20.2589C23.566 24.4589 23.566 28.7589 23.566 33.0589Z" fill="#593A2D"/>
                <Path d="M205.51 34.459C206.308 29.859 206.308 29.859 210.594 29.859C217.274 29.859 223.954 29.959 230.633 29.759C232.727 29.759 232.527 30.759 232.527 32.059C232.527 33.359 232.827 34.459 230.733 34.459C222.359 34.359 213.984 34.459 205.51 34.459Z" fill="#593A2D"/>
                <Path d="M79.5948 34.4589C74.4106 34.4589 69.3261 34.4589 64.2417 34.4589C60.9517 34.4589 57.6618 34.3589 54.3718 34.4589C52.2782 34.5589 52.9761 33.1589 52.9761 32.1589C52.9761 31.2589 52.1785 29.8589 54.2721 29.8589C61.9487 29.9589 69.6252 29.8589 77.2021 29.8589C78.199 29.8589 78.6975 30.1589 78.7972 31.1589C78.8969 32.2589 79.2957 33.2589 79.5948 34.4589Z" fill="#593A2D"/>
                <Path d="M7.4153 29.859C8.91073 29.859 10.4062 29.859 11.9016 29.859C14.1946 29.859 15.2912 31.759 14.394 33.859C14.0949 34.559 13.5964 34.359 13.0979 34.359C9.20981 34.359 5.3217 34.359 1.43358 34.359C-0.859417 34.359 0.336924 32.659 0.137533 31.759C-0.0618574 30.759 -0.261239 29.659 1.53328 29.759C3.52718 30.059 5.42139 29.859 7.4153 29.859Z" fill="#593A2D"/>
                <Path d="M278.188 34.4591C276.593 34.4591 274.998 34.4591 273.502 34.4591C271.209 34.4591 270.113 32.5591 271.01 30.4591C271.309 29.7591 271.807 29.9591 272.306 29.9591C276.194 29.9591 280.082 29.9591 283.97 29.9591C286.263 29.9591 285.067 31.559 285.266 32.559C285.466 33.559 285.665 34.759 283.871 34.559C281.976 34.359 280.082 34.4591 278.188 34.4591Z" fill="#593A2D"/>
                </Svg>
        );
    }

    const Lunges = () => {
        return (
            <Svg width="100%" height="90%" viewBox="0 0 172 180">
            <Path d="M127 47.5C138.9 47.5 150.7 47.5 162.6 47.5C167.9 47.5 171.6 50.9 171.8 55.9C172 60.6 168.5 64.6 163.4 64.9C149.7 65.7 136 66.3 122.4 67C117.5 67.2 112.5 67.4999 107.6 67.6999C106.2 67.6999 105.6 68.2 105.1 69.6C101.6 80.3 97.9997 90.9 94.3997 101.5C93.5997 103.9 95.3997 103.5 96.4997 103.8C105.6 105.6 114.7 107.3 123.9 109.1C130.2 110.3 133.9 114.8 133.8 121.2C133.5 136.8 133.2 152.3 132.8 167.9C132.6 176.4 125.9 181.5 118.3 179.2C113.6 177.8 110.8 173.7 110.7 168.3C110.4 156.9 110 145.6 109.8 134.2C109.8 132.4 109.2 131.6 107.5 131.4C96.9997 130 86.5997 128.6 76.0997 127.1C72.5997 126.6 68.9997 126.2 65.4997 125.2C55.4997 122.5 50.7997 113.4 54.0997 102C56.4997 93.8 59.5997 85.9 62.4997 77.9C64.2997 72.8 65.9997 67.5999 68.1997 62.6999C72.4997 52.5999 80.4997 47.7 91.2997 47.6C103.1 47.4 115.1 47.5 127 47.5Z" fill="#593A2D"/>
            <Path d="M49.6999 117.2C53.9999 127.4 62.4999 130.5 72.9999 131.4C68.5999 135.2 64.4999 138.6 60.4999 142C46.9999 153.4 33.4999 164.8 20.0999 176.3C13.1999 182.2 3.89994 180.1 1.39994 171.8C0.0999431 167.5 1.29992 163.8 4.49992 160.7C13.5999 151.9 22.6999 143.2 31.7999 134.4C37.6999 128.7 43.5999 123 49.6999 117.2Z" fill="#593A2D"/>
            <Path d="M85.7002 21.3001C85.7002 9.70008 95.0002 0.20001 106.6 0.10001C118 9.5155e-06 127.7 9.70008 127.6 21.3001C127.6 32.9001 118.1 42.3001 106.5 42.3001C95.1002 42.3001 85.7002 32.8001 85.7002 21.3001Z" fill="#593A2D"/>
            </Svg>
        );
    }

    const Bentoverrow = () => {
        return (
            <Svg width="100%" height="90%" viewBox="0 0 150 173">
            <Path d="M8.52661 159.4C8.82542 155.5 9.92107 151.9 10.8175 148.2C14.6024 131.5 18.3873 114.8 22.2719 98.1C22.4711 97.4 22.3715 96.8 22.0727 96.2C15.7977 80.7 9.52265 65.2 3.34724 49.7C1.25557 44.5 0.359133 39.0001 0.55834 33.3001C0.657944 30.1001 2.45081 28.0001 5.33931 26.8001C8.42701 25.5001 11.6143 24.9001 14.9012 24.8001C20.6782 24.5001 26.4552 23.7001 32.033 22.3001C33.3279 22.0001 33.5271 22.4 33.7263 23.6C35.6187 35.4 37.6108 47.2 39.6029 59C39.7025 59.7 40.2005 60.5 38.9057 60.7C37.7104 60.9 37.4116 60.6 37.2124 59.5C37.0132 58 36.7144 56.5 36.4156 55C35.818 52 33.4275 50.1 30.3398 50.5C27.8497 50.8 25.3596 51.3001 22.9691 51.8001C20.0806 52.5001 18.3873 55.1 18.8854 58C20.1802 65.7 21.5747 73.4 22.9691 81.1C23.4671 83.9 25.8576 85.8 28.6465 85.5C31.3358 85.2 34.0251 84.7 36.7144 84.1C39.3041 83.4 40.8977 80.9 40.4993 78.2C40.3001 76.4 39.9017 74.6 39.6029 72.7C39.5033 72.2 39.6029 72.0001 40.1009 71.8001C40.5989 71.6001 40.7981 71.8 40.9973 72.2C43.6866 79.2 46.8739 86 49.1648 93.2C50.2604 96.7 48.866 100.2 48.0692 103.6C43.6866 123.1 39.2045 142.6 34.7223 162C33.2283 168.4 27.9493 172.7 21.6743 172.7C15.3993 172.7 10.0207 168.3 8.72582 161.9C8.62621 161.1 8.62622 160.2 8.52661 159.4Z" fill="#593A2D"/>
            <Path d="M125.561 2.39999C138.908 2.49999 149.366 13.1999 149.266 26.5999C149.167 39.7999 138.41 50.3999 125.262 50.1999C112.015 50.0999 101.656 39.1999 101.756 25.6999C101.756 12.8999 112.712 2.29999 125.561 2.39999Z" fill="#593A2D"/>
            <Path d="M53.9458 26.8001C54.7426 31.7001 55.5394 36.5001 56.3362 41.3001C57.5315 48.2001 58.7267 55.2 59.8223 62.1C60.6192 67 57.5315 71.4 52.8501 72.1C47.9695 72.8 43.8858 69.8 43.089 64.7C40.3997 48.9 37.81 33.1001 35.2203 17.3001C34.1247 10.8001 39.304 5.80008 45.6787 7.30008C56.2366 9.80008 66.7946 12.4 77.253 15C81.7351 16.1 84.4244 20.6 83.3288 25.1C82.2331 29.7 77.9502 32.5 73.3684 31.5C67.4918 30.2 61.7148 28.7001 55.8382 27.3001C55.3402 27.0001 54.7426 26.9001 53.9458 26.8001Z" fill="#593A2D"/>
            <Path d="M43.7861 4.40007C45.1806 1.90007 48.4675 0.200066 51.4556 0.900066C63.0096 3.60007 74.5636 6.00004 85.9184 9.50004C91.9942 11.4 95.0819 16.1 95.2811 22.5C95.5799 32.5 90.799 39.7 82.7311 45.1C81.9342 45.7 81.0378 46.1 80.1414 46.6C78.2489 42.8 76.6553 42 72.4719 42.7C70.6791 43 68.8862 43.3 67.0933 43.7C63.8064 44.4 62.1132 47.2 62.7108 50.5C63.0096 52 63.2088 53.5001 63.6072 54.9001C63.906 56.1001 63.2088 56.1001 62.412 56.3001C61.3163 56.6001 61.4159 56.0001 61.2167 55.3001C59.8223 46.9001 58.4278 38.6001 56.9338 29.9001C59.2247 30.4001 61.3163 30.9 63.408 31.5C66.4957 32.3 69.683 33.1001 72.7707 33.8001C78.6473 35.1001 84.2251 31.6 85.6196 25.7C87.014 19.9 83.6275 14.1 77.8505 12.6C72.4719 11.2 67.0933 9.90002 61.6151 8.60002C56.2366 7.30002 50.9576 5.99999 45.579 4.69999C45.081 4.59999 44.3838 4.50007 43.7861 4.40007Z" fill="#593A2D"/>
            <Path d="M62.4121 63.5999C62.2129 62.4999 62.1133 61.4 61.9141 60.3C61.7149 59.4 61.8145 58.8999 62.9101 58.6999C64.1054 58.4999 65.7986 58.8 66.2966 57.8C66.695 56.9 66.0974 55.3999 65.8982 54.1999C65.699 52.7999 65.4002 51.3 65.1014 49.9C64.8026 47.9 65.699 46.4999 67.5915 46.0999C69.7827 45.5999 71.974 45.2 74.1653 44.9C76.0578 44.6 77.4522 45.8 77.8506 47.9C78.5479 51.7 79.2451 55.5 79.9423 59.3C80.5399 62.8 81.2372 66.3 81.8348 69.9C82.2332 72.1 81.2371 73.6 79.0459 74C77.1534 74.4 75.3606 74.7 73.4681 75C70.6792 75.4 69.5836 74.6 68.9859 71.8C68.5875 69.7 68.1891 67.6 67.8903 65.5C67.7907 64.5 67.3923 64.2 66.3962 64.5C65.5994 64.7 64.703 64.7 63.9062 64.9C62.6113 65.4 61.9141 65.1999 62.4121 63.5999Z" fill="#593A2D"/>
            <Path d="M41.7943 68.9999C40.4994 69.1999 39.3042 69.4999 38.0093 69.6999C36.9137 69.7999 36.6149 70.2 36.8141 71.3C37.3121 73.3 37.6109 75.4 38.0093 77.4C38.5074 80.3 37.6109 81.5999 34.7224 82.0999C33.0291 82.3999 31.3359 82.6999 29.6427 82.9999C27.1526 83.4999 25.7581 82.4999 25.3597 80.0999C24.0648 72.8999 22.77 65.6999 21.4752 58.4999C20.9771 55.6999 21.9732 54.4 24.6625 53.9C26.3557 53.6 28.049 53.2999 29.7422 52.9999C32.3319 52.4999 33.6268 53.3999 34.1248 55.9999C34.5232 58.1999 35.0212 60.5 35.32 62.8C35.4196 63.7 35.8181 63.7999 36.5153 63.5999C37.7105 63.3999 39.105 62.5999 40.0014 63.1999C40.8978 63.6999 40.4994 65.3999 40.7982 66.4999C41.1966 67.1999 41.4954 67.9999 41.7943 68.9999Z" fill="#593A2D"/>
            <Path d="M84.4243 70.7C83.6275 66.5 82.9303 62.2 82.1334 58C81.8346 56.1 81.5358 54.3001 81.1374 52.4001C80.9382 51.5001 81.237 51.3 82.0338 51.2C83.8267 50.9 85.52 50.5001 87.3128 50.3001C89.7033 49.9001 90.9981 50.8 91.4961 53.2C92.791 60.4 94.1855 67.6001 95.3807 74.8001C95.8787 77.6001 94.9823 78.9001 92.1934 79.4001C90.4005 79.7001 88.7073 80.0001 86.9144 80.4001C85.3208 80.7001 83.8267 80.4001 83.2291 78.9001C82.6315 77.5001 81.6354 75.9001 83.2291 74.3001C84.1255 73.3001 84.4243 72 84.4243 70.7Z" fill="#593A2D"/>
            <Path d="M51.9536 74.8C50.1607 74.7 50.2603 75.7 50.5592 76.9C50.9576 79 51.356 81.1 51.7544 83.1C51.854 83.8 51.9536 84.5 51.5552 85.2C51.1568 86 50.6587 86.8 49.7623 86.8C49.0651 86.8 49.0651 85.8 48.8659 85.2C46.9734 80.6 45.1806 76 43.4873 71.3C45.8778 73.5 48.6667 74.7 51.9536 74.8Z" fill="#593A2D"/>
            <Path d="M55.6392 74.1999C58.0296 72.6999 60.0217 71 61.3166 68.4C61.5158 67.9 65.1015 67.1 65.4999 67.3C65.8983 67.5 65.7987 67.7999 65.8983 68.1999C66.7948 72.1999 66.7948 72.2 62.8106 72.9C60.4201 73.4 58.0296 73.7999 55.6392 74.1999Z" fill="#593A2D"/>
            </Svg>
        );
    }

    const Sidebend = () => {
        return (
            <Svg width="100%" height="90%" viewBox="0 0 103 190">
            <Path d="M25.7949 88.9C32.8668 92.4 39.7394 95.7 46.612 99.1C50.7954 101.2 52.1898 104 50.5961 107.2C49.0025 110.4 46.0144 111 41.7315 108.9C33.564 104.9 25.4961 100.9 17.3286 96.9C12.4481 94.5 11.6512 92.1001 14.2409 87.3001C20.3167 75.9001 26.2929 64.4 32.5679 53C40.4366 38.7 55.4767 38.4 63.7438 52.5C73.9034 70 78.3855 88.9 76.9911 109.2C76.8915 110.7 77.2899 111.9 77.8875 113.1C80.3776 118.6 82.8677 124.2 85.4573 129.6C86.2542 131.4 86.7522 132.5 84.0629 132.9C80.278 133.5 76.493 134.4 72.8077 135.5C70.716 136.1 69.8196 135.5 69.1224 133.7C68.226 131.3 66.9311 129 65.9351 126.5C64.7399 123.4 63.5446 124.1 62.2498 126.4C60.0585 130.2 57.7676 134 55.5763 137.8C54.7795 139.3 53.8831 139.9 52.4886 138.5C52.1898 138.2 51.7914 138 51.4926 137.8C48.0065 135.4 42.6279 133.6 41.5323 130.4C40.6358 127.8 44.8191 123.3 47.11 119.9C48.8033 117.3 48.9029 115.3 46.4128 113C47.608 112.5 48.5045 112.3 49.4009 111.8C52.2894 110.3 53.9827 107.9 54.0823 104.5C54.1819 101 52.4886 98.1 49.3013 97C45.118 95.5 43.6239 92.8 43.0263 88.6C42.0303 82.2 39.7394 76.1 36.1536 69.9C32.3687 76.6 29.1814 82.6 25.7949 88.9Z" fill="#593A2D"/>
            <Path d="M102.888 180.8C102.988 185.2 100.199 188.7 96.3142 189.5C92.2304 190.3 88.3459 188.1 86.9514 183.9C83.7641 174.1 80.6764 164.2 77.6883 154.4C76.2939 149.9 74.3018 145.7 72.3097 141.5C71.3137 139.4 71.7121 138.6 74.003 138.3C75.8954 138 77.7879 137.5 79.5808 137.1C87.6487 135.2 88.1467 135 90.836 142.7C95.1189 154.7 98.7047 167 102.49 179.2C102.788 179.7 102.788 180.4 102.888 180.8Z" fill="#593A2D"/>
            <Path d="M27.7871 187.8C21.7112 187.7 17.4282 182.3 19.5199 177.1C25.2969 163.1 29.6795 148.5 37.6478 135.5C38.7434 133.7 39.5402 133.4 41.3331 134.7C44.4208 137 47.6081 139.1 50.895 141.2C52.0902 142 52.7875 142.6 51.7915 144.1C44.4208 155.9 40.7355 169.3 35.1577 181.9C33.6636 185.5 31.1736 187.6 27.7871 187.8Z" fill="#593A2D"/>
            <Path d="M16.3327 54.4999C7.5676 54.4999 0.694911 47.7 0.595307 38.9C0.495704 30.1 7.36834 23.0999 16.0338 22.9999C24.8985 22.8999 32.07 30 32.07 38.9C32.07 47.5 25.0978 54.4999 16.3327 54.4999Z" fill="#593A2D"/>
            <Path d="M62.1505 45.9C58.5648 42.4 54.979 40.5 50.7957 40C49.6004 39.8 48.9032 39.2 48.3056 38.1C41.4329 24.6 29.9785 16.8001 16.2333 11.8001C15.3368 11.5001 14.4404 11.2 13.6436 10.7C11.2531 9.19997 10.3567 7.00006 11.2531 4.30006C12.1495 1.70006 14.1416 0.299991 17.0301 0.599991C35.1579 1.99999 60.1584 26.9 62.1505 45.9Z" fill="#593A2D"/>
            <Path d="M0.794434 92.9001C0.794434 92.3001 0.794446 91.6001 0.993653 91.0001C1.59127 89.3001 1.39208 86.2 3.68296 86.7C6.57146 87.3 3.98174 89.6 3.78254 91.1C3.28452 95.5 4.57938 98.9 7.96589 101.6C8.86232 102.3 11.0536 102.8 9.65916 104.5C8.46392 106 7.16908 104.5 6.17304 103.7C2.58732 101 0.794434 97.5001 0.794434 92.9001Z" fill="#593A2D"/>
            <Path d="M5.17725 92.6C5.37645 91.8 5.57567 90.7 5.87448 89.7C6.17329 88.7 6.67131 87.8 7.86655 88.2C9.06179 88.6 8.86254 89.5 8.56373 90.6C7.56769 93.7 8.36452 96.3 11.0538 98.2C11.8506 98.8 12.8467 99.4001 11.9503 100.5C11.0538 101.6 9.95817 101 9.06174 100.3C6.57166 98.5001 5.47606 95.9 5.17725 92.6Z" fill="#593A2D"/>
            </Svg>
        );
    }
    const router = useRouter();

    const onDeadliftPress = () => { router.push('/deadlift') };


    const Boxes = () => {
        return (
            <View style={stylesA.boxContainer}>
                <TouchableOpacity style={stylesA.opacity}  onPress={() => onDeadliftPress()}>
                    <View style={stylesA.box}>
                        {/* <Text style={{color:"#99f",fontSize:40}}>SVG</Text> */}
                        <Deadlift/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={stylesA.opacity}>
                    <View style={stylesA.box}>
                        <Benchpress/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={stylesA.opacity}>
                    <View style={stylesA.box}>
                        <Lunges/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={stylesA.opacity}>
                    <View style={stylesA.box}>
                        <Bentoverrow/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={stylesA.opacity}>
                    <View style={stylesA.box}>
                        <Sidebend/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={stylesA.opacity}>
                    <View style={stylesA.box}>
                        <Sidebend/>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <SafeAreaView>
            <Header/>
            <Boxes/>
        </SafeAreaView>
    );
}

const stylesA = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        width: '100%',
        height: '15%',
        backgroundColor: '#c8c8c8',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    boxContainer: {
        width: '100%',
        height: '85%',
        backgroundColor: '1f1f1f',
        padding: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'flex-start',
        // justifyContent: 'center'
    },
    opacity: {
        flexDirection: 'row',
        width: '55%',
        height: '40%',
        paddingTop: 0,
        paddingLeft: 0,
        paddingRight: 0,
        backgroundColor: 'grey',
        margin: 1
    },
    box: {
        width: '100%',
        height: '100%',
        paddingTop: 0,
        backgroundColor: 'grey',
        margin: 1
    },
    boldtext: {
        fontWeight: 'bold'
    },
    body: {
        backgroundColor: 'yellow',
        padding: 20
    }
});