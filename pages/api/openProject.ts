import { dialog } from 'electron';

export default async (req, res) => {
  res.statusCode = 200

  let files = await dialog.showOpenDialog({
    title: 'project.json',
    properties: ['openFile', 'multiSelections'],
    filters: [
      { name: 'CisumRexim project', extensions: ['json'] }
    ]
  });

  res.json(files);
}
