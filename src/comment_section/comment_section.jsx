import React, { useState } from 'react'
import { CommentSection } from 'react-comments-section'
import 'react-comments-section/dist/index.css'

const CustomComponent = () => {
  const [data] = useState([
    {
      userId: '01a',
      comId: '012',
      fullName: 'Riya Negi',
      avatarUrl: 'https://ui-avatars.com/api/name=Riya&background=random',
      userProfile: 'https://www.linkedin.com/in/riya-negi-8879631a9/',
      text: 'Hey, Loved your blog! ',
      replies: [
        {
          userId: '02a',
          comId: '013',
          userProfile: 'https://www.linkedin.com/in/riya-negi-8879631a9/',
          fullName: 'Adam Scott',
          avatarUrl: 'https://ui-avatars.com/api/name=Adam&background=random',
          text: 'Thanks! It took me 1 month to finish this project but Iam glad it helped out someone!🥰'
        }
      ]
    }
  ])

  return(
      <CommentSection  
        currentUser={{
          currentUserId: '01a',
          currentUserImg:
            'https://mir-s3-cdn-cf.behance.net/user/276/f4503851443203.5b87b230864b1.jpg',
          currentUserProfile:
            'https://mir-s3-cdn-cf.behance.net/user/276/f4503851443203.5b87b230864b1.jpg',
          currentUserFullName: 'Riya Negi'
        }}
        logIn={{
            loginLink: 'http://localhost:3001/',
            signupLink: 'http://localhost:3001/'
          }}
        hrStyle={{ border: '0.5px solid white' }}
        titleStyle={{ color: '#f2f2f2' }}
        // commentsCount={8}
        commentData={data}
        imgStyle={{ borderRadius: '50%' }}
        customImg='https://mir-s3-cdn-cf.behance.net/user/276/f4503851443203.5b87b230864b1.jpg'
        inputStyle={{ border: '1px solid black' }}
        formStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.795)', }}
        submitBtnStyle={{ border: '1px solid black', backgroundColor: 'black' }}
        cancelBtnStyle={{
          border: '1px solid gray',
          backgroundColor: 'gray',
          color: 'white'
        }}
        removeEmoji={true}
        overlayStyle={{ backgroundColor: 'black', color: 'white' }}
        replyInputStyle={{ borderBottom: '1px solid black', color: 'black' }}
      />
      )
}

export default CustomComponent