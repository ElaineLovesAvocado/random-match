import * as React from 'react';
import './match.css'
import Button from '@mui/material/Button';

import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';



const DemoPaper = styled(Paper)(({ theme }) => ({
  width: 350,
  height: 200,
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: 'center',
}));

function shuffleArray(array) {
  let length = array.length;
  let shuffle = array.slice(); // copy of array
  // loop over the array
  for (let i = length - 1; i > 0; i -= 1) {
    let random = Math.floor(Math.random() * (i + 1)); // random card position
    let current = shuffle[i]; // current card
    // swap the random card and the current card
    shuffle[i] = shuffle[random]; // move the random card to the current position
    shuffle[random] = current; // put the current card in the random position
  }
  return shuffle; // return shuffled array
};

function formatMatch(array, formatString) {

    if (array.length % 4 != 0) {
      return "Please check the size of input players!! \n Need to be multiple of 4!"
    }

    if (array.length < 4){
      console.log(formatString)
      return formatString
    }
  
    while (array.length > 3) {
      formatString +=  array[0] + '&' + array[1] + '   🆚   ' + array[2] + '&' + array[3] + "\n"
      let newArr = array.slice(4)
      return formatMatch(newArr, formatString)
    }

}

function formatTeamMatch(array, formatString){
  if (array.length % 2 != 0) {
    return "Please check the size of input players!! \n Need to be multiple of 2!"
  }

  if (array.length < 2){
    console.log(formatString)
    return formatString
  }

  while (array.length > 1) {
    formatString += '🏸' + array[0] + '  🆚  ' + array[1] + "\n"
    let newArr = array.slice(2)
    return formatTeamMatch(newArr, formatString)
  }
}


const Match = () => {
  const [players, setplayers]  = React.useState("");
  const [teamMatch, setteamMatch] = React.useState([])
  const [match, setmatch] = React.useState([]);
  const [match2, setmatch2] = React.useState([]);


  const generateRandomMatch = (event) => {
      event.preventDefault();

      var playersArr = players.replace('1.', '').replace(/(\r\n|\n|\r)/gm, "").trim().split(/[0-9]+\./)
      //var playersArr = players.replace(/,/g, '&').replace(/\s/g, '').split('&')
  
      var shuffledArr1 = shuffleArray(playersArr)
      var shuffledArrSecondTime = shuffleArray(playersArr)
      var shuffledArr2 = shuffleArray(shuffledArrSecondTime)

      setmatch(shuffledArr1)
      setmatch2(shuffledArr2)

      var teamPlayersArr = players.replace(/\s/g, '').split(/,/g)
      console.log("*****teamPlayerARR")
      console.log(teamPlayersArr)
      var shuffledArr3 = shuffleArray(teamPlayersArr)
      setteamMatch(shuffledArr3)
      console.log("shuffled team match *********")
      console.log(shuffledArr3)

      // Send email after generated match      
      // var emailResult = "Team match:\n" + formatTeamMatch(teamMatch, ' ')
      // + '\nMatch1:\n' + formatMatch(match, ' ') + '\nMatch2:\n' + formatMatch(match2, ' '); 

      var emailArray = '\nMatch1:\n' + shuffledArr1.toString() + '\nMatch2:\n' + shuffledArr2.toString(); 

      console.log("***Email sending*******" + emailArray)
      var templateParams = {
        name: "From Elaine",
        message: emailArray
      };

      //sendEmail(templateParams)
  }

  const sendEmail = (templateParams) => {
    emailjs.send('service_jw2xepg', 'template_kc-badminton', templateParams, {
        publicKey: 'ecs0JBXL3vFYva7aB',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="body">
    
          <p>Generate random match:</p>
          <div className='firstGame'>
            <textarea name="postContent" placeholder='Example format: 1.Elaine  2.Joe  3.Name  4.Name'
            rows={8} cols={45} value={players} onChange={e => setplayers(e.target.value)}> 
            
            </textarea>
          </div>
          <div className='submitButton'>
            <Button variant="contained" onClick={generateRandomMatch} >Submit</Button>
          </div>

          <div className='shuffledMatch'>

              <Stack direction="row" spacing={2}>
                {/* <DemoPaper variant="elevation">
                  <h1>Match 1</h1>
                  <pre className='teamMatch'>{formatTeamMatch(teamMatch, ' ')}</pre>
                </DemoPaper>  */}
                <DemoPaper variant="elevation">
                  <h1>Match 1</h1>
                  <pre className='teamMatch'>{formatMatch(match, ' ')}</pre>
                </DemoPaper>              
                <DemoPaper variant="elevation">
                  <h1>Match 2</h1>
                  <pre className='teamMatch'>{formatMatch(match2, ' ')}</pre>
                </DemoPaper>
              </Stack>
          </div>

          
  </div>
  );
}

export default Match
