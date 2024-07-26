import React from 'react';
import { useLocation } from 'react-router-dom';
import { Card, CardContent, Typography, Box } from '@mui/material';
import './CharacterDetails.css'; // Import CSS for background image

const CharacterDetails = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    const characterName = queryParams.get('name');
    const race = queryParams.get('race');
    const characterClass = queryParams.get('class');
    const alignment = queryParams.get('alignment');
    const strength = queryParams.get('strength');
    const dexterity = queryParams.get('dexterity');
    const charisma = queryParams.get('charisma');
    const intelligence = queryParams.get('intelligence');
    const constitution = queryParams.get('constitution');
    const wisdom = queryParams.get('wisdom');
    const skills = queryParams.get('skills') ? queryParams.get('skills').split(',') : [];
    const weapons = queryParams.get('weapons');
    const armor = queryParams.get('armor');
    const adventuringGear = queryParams.get('adventuringGear');
    const tools = queryParams.get('tools');
    const miscellaneous = queryParams.get('miscellaneous');
    const potions = queryParams.get('potions').split(',');

    return (
        <Box className="character-details-container">
            <Card className="character-details-card">
                <CardContent>
                    <Typography variant="h5" gutterBottom>
                        Character Details
                    </Typography>
                    <Typography variant="body1">
                        <strong>Character Name:</strong> {characterName}
                    </Typography>
                    <Typography variant="body1">
                        <strong>Race:</strong> {race}
                    </Typography>
                    <Typography variant="body1">
                        <strong>Class:</strong> {characterClass}
                    </Typography>
                    <Typography variant="body1">
                        <strong>Alignment:</strong> {alignment}
                    </Typography>
                    <Typography variant="body1">
                        <strong>Strength:</strong> {strength}
                    </Typography>
                    <Typography variant="body1">
                        <strong>Dexterity:</strong> {dexterity}
                    </Typography>
                    <Typography variant="body1">
                        <strong>Charisma:</strong> {charisma}
                    </Typography>
                    <Typography variant="body1">
                        <strong>Intelligence:</strong> {intelligence}
                    </Typography>
                    <Typography variant="body1">
                        <strong>Constitution:</strong> {constitution}
                    </Typography>
                    <Typography variant="body1">
                        <strong>Wisdom:</strong> {wisdom}
                    </Typography>
                    <Typography variant="body1">
                        <strong>Skills:</strong> {skills.join(', ')}
                    </Typography>
                    <Typography variant="body1">
                        <strong>Weapons:</strong> {weapons}
                    </Typography>
                    <Typography variant="body1">
                        <strong>Armor:</strong> {armor}
                    </Typography>
                    <Typography variant="body1">
                        <strong>Adventuring Gear:</strong> {adventuringGear}
                    </Typography>
                    <Typography variant="body1">
                        <strong>Tools:</strong> {tools}
                    </Typography>
                    <Typography variant="body1">
                        <strong>Miscellaneous:</strong> {miscellaneous}
                    </Typography>
                    <Typography variant="body1">
                        <strong>Potions:</strong> {potions}
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
};

export default CharacterDetails;
