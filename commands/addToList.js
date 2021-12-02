const { SlashCommandBuilder } = require('@discordjs/builders');
const { Util } = require('discord.js');

//change this to the old text if it exists, and modify it, save the id of the messages for deletion later after the reply has been made
const message = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in dignissim justo. Aliquam vel dictum lectus. Phasellus dictum elit vitae justo pharetra rhoncus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque et ligula lacinia, porttitor nulla a, euismod nunc. Etiam tellus sapien, porta nec massa non, finibus mattis leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam massa arcu, ullamcorper id felis at, dapibus vulputate enim.' +
'Nulla eu dapibus arcu, nec molestie sapien. Maecenas sodales vitae est eget dictum. Praesent eget erat ipsum. Nunc vestibulum finibus eleifend. Cras turpis nibh, imperdiet non sollicitudin et, auctor nec nisl. Ut convallis quis nulla ut tristique. Proin commodo odio luctus ipsum vestibulum placerat. Vestibulum ac mollis turpis. Vivamus laoreet egestas sem, non tincidunt eros mattis at. Aenean a aliquam felis, a ullamcorper dui. Donec justo metus, gravida in convallis ut, cursus vitae leo. Quisque iaculis pellentesque rutrum. Sed semper eget neque vel feugiat.\n' +
'Phasellus non justo blandit, pellentesque odio ut, cursus dui. Vivamus quis volutpat dolor. Quisque sed arcu accumsan, posuere turpis id, ornare dolor. Suspendisse potenti. Nam volutpat neque vitae mi tincidunt, a pellentesque odio faucibus. In porttitor et nisl et condimentum. Sed ligula ante, congue et urna ac, tristique finibus ex. Vestibulum nunc dolor, ultricies quis convallis in, hendrerit varius urna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n' +        
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et sollicitudin felis. Vestibulum pretium metus at pellentesque iaculis. Fusce ornare purus id efficitur eleifend. Mauris volutpat ligula tellus, ac maximus enim tempor vel. Morbi ut porttitor augue, eget congue urna. Curabitur venenatis gravida mauris vel hendrerit. Vivamus a dolor ex. Ut mollis, ipsum semper sollicitudin ultrices, dolor orci efficitur neque, in placerat risus velit et diam. Etiam ornare nunc ut sapien imperdiet, eu venenatis massa laoreet. Duis fermentum turpis ac lectus sagittis aliquam. Quisque ut magna dolor. Donec tristique mi semper dui luctus cursus. Ut quis sollicitudin lacus, scelerisque vulputate eros. Aenean ac nibh volutpat, ultrices tortor vel, fringilla diam. Mauris pharetra, justo id dapibus porttitor, velit arcu consequat nisi, quis sagittis lacus mauris nec eros.\n'+
'Curabitur sed diam elementum, egestas est eget, finibus risus. Curabitur eleifend ligula velit, eget fringilla nulla fringilla eu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent mollis tortor et felis placerat accumsan. Fusce efficitur malesuada sapien, quis vulputate dolor commodo consectetur. Proin ullamcorper semper ipsum, ac tincidunt tortor porttitor quis. Nullam eros ipsum, pellentesque sed quam fringilla, pretium pharetra elit.';

module.exports = {
	data: new SlashCommandBuilder()
		.setName('add')
		.setDescription('Adds the user to the blacklist'),
	async execute(interaction, channel) {
        Util.splitMessage(message).forEach(async e => {
            await channel.send(e);
        });
        
        //FIXME
        //might take more than 3 seconds so if it starts failing that might be why
        //a fix does exist with an other type of reply
        await interaction.reply('sendt'); 
	},
};