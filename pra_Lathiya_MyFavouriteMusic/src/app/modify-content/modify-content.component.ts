export class ModifyContentComponent implements OnInit {
  @Input() content: Content;
  @Input() isEditing: boolean;

  contentForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ModifyContentComponent>,
    private contentService: ContentService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.contentForm = this.fb.group({
      id: [{ value: this.content?.id, disabled: true }],
      title: [this.content?.title, Validators.required],
      subtitle: [this.content?.subtitle],
      description: [this.content?.description, Validators.required],
      imageUrl: [this.content?.imageUrl, Validators.required],
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    const updatedContent: Content = {
      id: this.content?.id,
      ...this.contentForm.value,
    };

    this.contentService.updateContent(updatedContent).subscribe(() => {
      this.dialogRef.close();
      this.messageService.displayMessage(
        `Content "${updatedContent.title}" updated successfully`
      );
    });
  }

  get title(): string {
    return this.isEditing ? 'Update Content' : 'Add Content';
  }

  get submitButtonLabel(): string {
    return this.isEditing ? 'Update Content' : 'Add Content';
  }
}
