import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Welcome.css'; // Import CSS file for styling

const Welcome = () => {
    const [characterName, setCharacterName] = useState('');
    const [race, setRace] = useState('');
    const [characterClass, setCharacterClass] = useState('');
    const [alignment, setAlignment] = useState('');
    const [strength, setStrength] = useState('');
    const [dexterity, setDexterity] = useState('');
    const [charisma, setCharisma] = useState('');
    const [intelligence, setIntelligence] = useState('');
    const [constitution, setConstitution] = useState('');
    const [wisdom, setWisdom] = useState('');
    const [selectedSkills, setSelectedSkills] = useState([]);
    const [weapons, setWeapons] = useState('');
    const [armor, setArmor] = useState('');
    const [adventuringGear, setAdventuringGear] = useState('');
    const [tools, setTools] = useState('');
    const [miscellaneous, setMiscellaneous] = useState('');
    const [potions, setPotions] = useState([]);
    const navigate = useNavigate();

    const handleInputChange = (event) => {
        setCharacterName(event.target.value);
    };

    const handleRaceChange = (event) => {
        setRace(event.target.value);
    };

    const handleClassChange = (event) => {
        setCharacterClass(event.target.value);
    };

    const handleAlignmentChange = (event) => {
        setAlignment(event.target.value);
    };

    const handleStrengthChange = (event) => {
        setStrength(event.target.value);
    };

    const handleDexterityChange = (event) => {
        setDexterity(event.target.value);
    };

    const handleCharismaChange = (event) => {
        setCharisma(event.target.value);
    };

    const handleIntelligenceChange = (event) => {
        setIntelligence(event.target.value);
    };

    const handleConstitutionChange = (event) => {
        setConstitution(event.target.value);
    };

    const handleWisdomChange = (event) => {
        setWisdom(event.target.value);
    };

    const handleDiceRoll = (attribute) => {
        const randomValue = Math.floor(Math.random() * 15) + 1; // Generate random number from 1 to 15
        switch (attribute) {
            case 'strength':
                setStrength(randomValue.toString());
                break;
            case 'dexterity':
                setDexterity(randomValue.toString());
                break;
            case 'charisma':
                setCharisma(randomValue.toString());
                break;
            case 'intelligence':
                setIntelligence(randomValue.toString());
                break;
            case 'constitution':
                setConstitution(randomValue.toString());
                break;
            case 'wisdom':
                setWisdom(randomValue.toString());
                break;
            default:
                break;
        }
    };

    const handleSkillChange = (event) => {
        const skill = event.target.value;
        if (selectedSkills.includes(skill)) {
            setSelectedSkills(selectedSkills.filter((s) => s !== skill));
        } else {
            if (selectedSkills.length < 5) {
                setSelectedSkills([...selectedSkills, skill]);
            }
        }
    };
    

    

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission, e.g., save character details
        console.log(`Character Name: ${characterName}`);
        console.log(`Race: ${race}`);
        console.log(`Class: ${characterClass}`);
        console.log(`Alignment: ${alignment}`);
        console.log(`Strength: ${strength}`);
        console.log(`Dexterity: ${dexterity}`);
        console.log(`Charisma: ${charisma}`);
        console.log(`Intelligence: ${intelligence}`);
        console.log(`Constitution: ${constitution}`);
        console.log(`Wisdom: ${wisdom}`);
        console.log(`Skills: ${selectedSkills.join(', ')}`);
        console.log(`Weapons: ${weapons}`);
        console.log(`Armor: ${armor}`);
        console.log(`Adventuring Gear: ${adventuringGear}`);
        console.log(`Tools: ${tools}`);
        console.log(`Miscellaneous: ${miscellaneous}`);
        console.log(`Potions: ${potions.join(', ')}`);
      

        // Navigate to character details page with query params
        navigate(`/character-details?name=${encodeURIComponent(characterName)}&race=${encodeURIComponent(race)}&class=${encodeURIComponent(characterClass)}&alignment=${encodeURIComponent(alignment)}&strength=${encodeURIComponent(strength)}&dexterity=${encodeURIComponent(dexterity)}&charisma=${encodeURIComponent(charisma)}&intelligence=${encodeURIComponent(intelligence)}&constitution=${encodeURIComponent(constitution)}&wisdom=${encodeURIComponent(wisdom)}&skills=${encodeURIComponent(selectedSkills.join(','))}&weapons=${encodeURIComponent(weapons)}&armor=${encodeURIComponent(armor)}&adventuringGear=${encodeURIComponent(adventuringGear)}&tools=${encodeURIComponent(tools)}&miscellaneous=${encodeURIComponent(miscellaneous)}&potions=${encodeURIComponent(potions.join(','))}`);
};

    const skillsList = [
        'Stealth', 'Athletics', 'Perception', 'Survival', 'Persuasion', 
        'Deception', 'Intimidation', 'Investigation', 'Medicine', 'Arcana', 
        'History', 'Engineering', 'Survival', 'Technology', 'Acrobatics', 
        'Animal Handling', 'Performance', 'Religion', 'Sleight of Hand', 'Insight'
    ];

    const handleWeaponsChange = (e) => {
        setWeapons(e.target.value);
    };

    const handleArmorChange = (e) => {
        setArmor(e.target.value);
    };

    const handleAdventuringGearChange = (e) => {
        setAdventuringGear(e.target.value);
    };

    const handleToolsChange = (e) => {
        setTools(e.target.value);
    };

    const handleMiscellaneousChange = (e) => {
        setMiscellaneous(e.target.value);
    };

    // Event handler for checkbox inputs
    const handlePotionsChange = (e) => {
        const potion = e.target.value;
        if (e.target.checked) {
            setPotions([...potions, potion]);
        } else {
            setPotions(potions.filter(item => item !== potion));
        }
    };

    return (
        <div className="welcome-container">
            <div className="card">
                <h1>Create Your Character</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-row">
                        <label>
                            Character Name:
                            <input
                                type="text"
                                value={characterName}
                                onChange={handleInputChange}
                                required
                            />
                        </label>
                    </div>
                    <div className="input-row">
                        <label>
                            Race:
                            <select value={race} onChange={handleRaceChange} required>
                                <option value="">Select Race</option>
                                <option value="human">Human</option>
                                <option value="elf">Elf</option>
                                <option value="dwarf">Dwarf</option>
                                <option value="orc">Orc</option>
                                <option value="halfling">Halfling</option>
                                <option value="gnome">Gnome</option>
                            </select>
                        </label>
                    </div>
                    <div className="input-row">
                        <label>
                            Class:
                            <select value={characterClass} onChange={handleClassChange} required>
                                <option value="">Select Class</option>
                                <option value="warrior">Warrior</option>
                                <option value="rogue">Rogue</option>
                                <option value="mage">Mage</option>
                                <option value="cleric">Cleric</option>
                                <option value="ranger">Ranger</option>
                                <option value="bard">Bard</option>
                            </select>
                        </label>
                    </div>
                    <div className="input-row">
                        <label>
                            Alignment:
                            <select value={alignment} onChange={handleAlignmentChange} required>
                                <option value="">Select Alignment</option>
                                <option value="lawful-good">Lawful Good</option>
                                <option value="chaotic-good">Chaotic Good</option>
                                <option value="neutral-good">Neutral Good</option>
                                <option value="lawful-neutral">Lawful Neutral</option>
                                <option value="chaotic-neutral">Chaotic Neutral</option>
                                <option value="true-neutral">True Neutral</option>
                            </select>
                        </label>
                    </div>
                    <div className="attribute-row">
                        <div className="attribute-column">
                            <label>
                                Strength:
                                <input
                                    type="number"
                                    value={strength}
                                    onChange={handleStrengthChange}
                                    required
                                />
                                <button className="dice-button" type="button" onClick={() => handleDiceRoll('strength')}>
                                    Roll Dice
                                </button>
                            </label>
                        </div>
                        <div className="attribute-column">
                            <label>
                                Dexterity:
                                <input
                                    type="number"
                                    value={dexterity}
                                    onChange={handleDexterityChange}
                                    required
                                />
                                <button className="dice-button" type="button" onClick={() => handleDiceRoll('dexterity')}>
                                    Roll Dice
                                </button>
                            </label>
                        </div>
                        <div className="attribute-column">
                            <label>
                                Charisma:
                                <input
                                    type="number"
                                    value={charisma}
                                    onChange={handleCharismaChange}
                                    required
                                />
                                <button className="dice-button" type="button" onClick={() => handleDiceRoll('charisma')}>
                                    Roll Dice
                                </button>
                            </label>
                        </div>
                    </div>
                    <div className="attribute-row">
                        <div className="attribute-column">
                            <label>
                                Intelligence:
                                <input
                                    type="number"
                                    value={intelligence}
                                    onChange={handleIntelligenceChange}
                                    required
                                />
                                <button className="dice-button" type="button" onClick={() => handleDiceRoll('intelligence')}>
                                    Roll Dice
                                </button>
                            </label>
                        </div>
                        <div className="attribute-column">
                            <label>
                                Constitution:
                                <input
                                    type="number"
                                    value={constitution}
                                    onChange={handleConstitutionChange}
                                    required
                                />
                                <button className="dice-button" type="button" onClick={() => handleDiceRoll('constitution')}>
                                    Roll Dice
                                </button>
                            </label>
                        </div>
                        <div className="attribute-column">
                            <label>
                                Wisdom:
                                <input
                                    type="number"
                                    value={wisdom}
                                    onChange={handleWisdomChange}
                                    required
                                />
                                <button className="dice-button" type="button" onClick={() => handleDiceRoll('wisdom')}>
                                    Roll Dice
                                </button>
                            </label>
                        </div>
                    </div>
                    <div className="skills-row">
                        <h2>Select Skills (up to 5):</h2>
                        <div className="skills-checkboxes">
                            {skillsList.map((skill, index) => (
                                <div key={skill} className="skill-checkbox">
                                    <label>
                                        <input
                                            type="checkbox"
                                            value={skill}
                                            checked={selectedSkills.includes(skill)}
                                            onChange={handleSkillChange}
                                            disabled={!selectedSkills.includes(skill) && selectedSkills.length >= 5}
                                        />
                                        {skill}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='rows'>
                    <div className="input-row">
                    <fieldset>
                        <legend>Weapons: (choose 1)</legend>
                        <div className="radio-options">
                            <label>
                                <input
                                    type="radio"
                                    name="weapons"
                                    value="Shortsword"
                                    checked={weapons === 'Shortsword'}
                                    onChange={handleWeaponsChange}
                                />
                                Shortsword
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="weapons"
                                    value="Longbow with 20 arrows"
                                    checked={weapons === 'Longbow with 20 arrows'}
                                    onChange={handleWeaponsChange}
                                />
                                Longbow with 20 arrows
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="weapons"
                                    value="Quarterstaff"
                                    checked={weapons === 'Quarterstaff'}
                                    onChange={handleWeaponsChange}
                                />
                                Quarterstaff
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="weapons"
                                    value="Dagger (2)"
                                    checked={weapons === 'Dagger (2)'}
                                    onChange={handleWeaponsChange}
                                />
                                Dagger (2)
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="weapons"
                                    value="Handaxe (2)"
                                    checked={weapons === 'Handaxe (2)'}
                                    onChange={handleWeaponsChange}
                                />
                                Handaxe (2)
                            </label>
                        </div>
                    </fieldset>
                </div>
                <div className="input-row">
                    <fieldset>
                        <legend>Armor: (choose 1)</legend>
                        <div className="radio-options">
                            <label>
                                <input
                                    type="radio"
                                    name="armor"
                                    value="Leather armor"
                                    checked={armor === 'Leather armor'}
                                    onChange={handleArmorChange}
                                />
                                Leather armor
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="armor"
                                    value="Chain shirt"
                                    checked={armor === 'Chain shirt'}
                                    onChange={handleArmorChange}
                                />
                                Chain shirt
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="armor"
                                    value="Studded leather armor"
                                    checked={armor === 'Studded leather armor'}
                                    onChange={handleArmorChange}
                                />
                                Studded leather armor
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="armor"
                                    value="Scale mail"
                                    checked={armor === 'Scale mail'}
                                    onChange={handleArmorChange}
                                />
                                Scale mail
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="armor"
                                    value="Robes (for spellcasters)"
                                    checked={armor === 'Robes (for spellcasters)'}
                                    onChange={handleArmorChange}
                                />
                                Robes (for spellcasters)
                            </label>
                        </div>
                    </fieldset>
                </div>
                <div className="input-row">
                    <fieldset>
                        <legend>Adventuring Gear: (choose 1)</legend>
                        <div className="radio-options">
                            <label>
                                <input
                                    type="radio"
                                    name="adventuringGear"
                                    value="Backpack"
                                    checked={adventuringGear === 'Backpack'}
                                    onChange={handleAdventuringGearChange}
                                />
                                Backpack
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="adventuringGear"
                                    value="Bedroll"
                                    checked={adventuringGear === 'Bedroll'}
                                    onChange={handleAdventuringGearChange}
                                />
                                Bedroll
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="adventuringGear"
                                    value="Rations (5 days)"
                                    checked={adventuringGear === 'Rations (5 days)'}
                                    onChange={handleAdventuringGearChange}
                                />
                                Rations (5 days)
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="adventuringGear"
                                    value="Waterskin"
                                    checked={adventuringGear === 'Waterskin'}
                                    onChange={handleAdventuringGearChange}
                                />
                                Waterskin
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="adventuringGear"
                                    value="Tinderbox"
                                    checked={adventuringGear === 'Tinderbox'}
                                    onChange={handleAdventuringGearChange}
                                />
                                Tinderbox
                            </label>
                        </div>
                    </fieldset>
                </div>
                <div className="input-row">
                    <fieldset>
                        <legend>Tools: (choose 1)</legend>
                        <div className="radio-options">
                            <label>
                                <input
                                    type="radio"
                                    name="tools"
                                    value="Thieves' tools"
                                    checked={tools === "Thieves' tools"}
                                    onChange={handleToolsChange}
                                />
                                Thieves' tools
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="tools"
                                    value="Herbalism kit"
                                    checked={tools === 'Herbalism kit'}
                                    onChange={handleToolsChange}
                                />
                                Herbalism kit
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="tools"
                                    value="Smith's tools"
                                    checked={tools === "Smith's tools"}
                                    onChange={handleToolsChange}
                                />
                                Smith's tools
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="tools"
                                    value="Navigator's tools"
                                    checked={tools === "Navigator's tools"}
                                    onChange={handleToolsChange}
                                />
                                Navigator's tools
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="tools"
                                    value="Alchemist's supplies"
                                    checked={tools === "Alchemist's supplies"}
                                    onChange={handleToolsChange}
                                />
                                Alchemist's supplies
                            </label>
                        </div>
                    </fieldset>
                </div>
                <div className="input-row">
                    <fieldset>
                        <legend>Miscellaneous: (choose 1)</legend>
                        <div className="radio-options">
                            <label>
                                <input
                                    type="radio"
                                    name="miscellaneous"
                                    value="Rope (50 feet)"
                                    checked={miscellaneous === 'Rope (50 feet)'}
                                    onChange={handleMiscellaneousChange}
                                />
                                Rope (50 feet)
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="miscellaneous"
                                    value="Grappling hook"
                                    checked={miscellaneous === 'Grappling hook'}
                                    onChange={handleMiscellaneousChange}
                                />
                                Grappling hook
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="miscellaneous"
                                    value="Torch (5)"
                                    checked={miscellaneous === 'Torch (5)'}
                                    onChange={handleMiscellaneousChange}
                                />
                                Torch (5)
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="miscellaneous"
                                    value="Holy symbol (for clerics or paladins)"
                                    checked={miscellaneous === 'Holy symbol (for clerics or paladins)'}
                                    onChange={handleMiscellaneousChange}
                                />
                                Holy symbol (for clerics or paladins)
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="miscellaneous"
                                    value="Spell book (for wizards)"
                                    checked={miscellaneous === 'Spell book (for wizards)'}
                                    onChange={handleMiscellaneousChange}
                                />
                                Spell book (for wizards)
                            </label>
                        </div>
                    </fieldset>
                </div>
                <div className="input-row">
                    <fieldset>
                        <legend>Potions: (choose 2)</legend>
                        <div className="checkbox-options">
                            <label>
                                <input
                                    type="checkbox"
                                    name="potions"
                                    value="Healing potion (1d4+1)"
                                    checked={potions.includes('Healing potion (1d4+1)')}
                                    onChange={handlePotionsChange}
                                />
                                Healing potion (1d4+1)
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    name="potions"
                                    value="Potion of climbing"
                                    checked={potions.includes('Potion of climbing')}
                                    onChange={handlePotionsChange}
                                />
                                Potion of climbing
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    name="potions"
                                    value="Potion of invisibility (1 hour)"
                                    checked={potions.includes('Potion of invisibility (1 hour)')}
                                    onChange={handlePotionsChange}
                                />
                                Potion of invisibility (1 hour)
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    name="potions"
                                    value="Potion of healing (2d4+2)"
                                    checked={potions.includes('Potion of healing (2d4+2)')}
                                    onChange={handlePotionsChange}
                                />
                                Potion of healing (2d4+2)
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    name="potions"
                                    value="Potion of water breathing"
                                    checked={potions.includes('Potion of water breathing')}
                                    onChange={handlePotionsChange}
                                />
                                Potion of water breathing
                            </label>
                        </div>
                    </fieldset>
                </div>
                </div>
                    <button className="submit-button" type="submit">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Welcome;
