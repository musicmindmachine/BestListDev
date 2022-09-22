const gradient = require("gradient-string");

const logoString = `
,---------.   .-\'\'\'-.       ,---.   .---.    .-./\`) ,---.  ,---.   .-\'\'-.   
\\          \\ / _     \\     /,--.|   | ,_|    \\ .-.\')|   /  |   | .\'_ _   \\  
 \`--.  ,---\'(\`\' )/\`--\'    //_  || ,-./  )    / \`-\' \\|  |   |  .\'/ ( \` )   \' 
    |   \\  (_ o _).      /_( )_|| \\  \'_ \'\`)   \`-\'\`\"\`|  | _ |  |. (_ o _)  | 
    :_ _:   (_,_). \'.   /(_ o _)|  > (_)  )   .---. |  _( )_  ||  (_,_)___| 
    (_I_)  .---.  \\  : / /(_,_)||_(  .  .-\'   |   | \\ (_ o._) /\'  \\   .---. 
   (_(=)_) \\    \`-\'  |/  \`-----\' ||\`-\'\`-\'|___ |   |  \\ (_,_) /  \\  \`-\'    / 
    (_I_)   \\       / \`-------|||-\' |        \\|   |   \\     /    \\       /  
    \'---\'    \`-...-\'          \'-\'   \`--------\`\'---\'    \`---\`      \`\'-..-\'   
`;

const gradientColors = ["#58EFEC", "#7CCAD5", "#A0A6BE", "#C481A7", "#E85C90"];

// Use the same gradient on every line
const logoColoredString = gradient(gradientColors).multiline(logoString.toString());

const showLogo = () => {
  console.log(logoColoredString);
};

exports.showLogo = showLogo;
