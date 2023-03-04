import { Node, mergeAttributes } from '@tiptap/core'

export default Node.create({
  name: 'video', // unique name for the Node
  group: 'block', // belongs to the 'block' group of extensions
  selectable: true, // so we can select the video
  draggable: true, // so we can drag the video
  atom: true, // is a single unit

  addOptions() {
    return {
      className: 'video-container',
      width: '640',
      height: '360',
      frameborder: '0',
      allowfullscreen: 'true',
      allow: 'accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;',
    }
  },

  addAttributes() {
    return {
      "src": {
        default: null
      },
    }
  },

  parseHTML() {
    return [
      {
        tag: 'div[data-video] iframe',
      },
    ]
  },

  renderHTML({ HTMLAttributes }) {
    return [
      'div',
      { 'data-video': '' },
      [
        'iframe',
        mergeAttributes(this.options.HTMLAttributes,
          {
            className: this.options.className,
            width: this.options.width,
            height: this.options.height,
            frameborder: this.options.frameborder,
            allowfullscreen: this.options.allowFullscreen,
            allow: this.options.allow,
        }, HTMLAttributes)]];
  },

  addCommands() {
    return {
      setVideo: options => ({ commands }) => {
        return commands.insertContent({
          type: this.name,
          attrs: options,
        })
      },
    }
  },

  // addNodeView() {
  //   return ({ editor, node }) => {
  //     const div = document.createElement('div');
  //     div.className = 'video-container' + (editor.isEditable ? ' cursor-pointer' : '');
  //     const iframe = document.createElement('iframe');
  //     if (editor.isEditable) {
  //       iframe.className = 'pointer-events-none';
  //     }
  //     iframe.width = '640';
  //     iframe.height = '360';
  //     iframe.frameborder = "0";
  //     iframe.allowfullscreen = "true";
  //     iframe.allow='accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;'
  //     iframe.src = node.attrs.src;
  //     div.append(iframe);
  //     return {
  //       dom: div,
  //     }
  //   }
  // },
});